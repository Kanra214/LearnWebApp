const mongoose = require('mongoose');
const debug = require('debug')('app:db');



const groupSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    members: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
        required: true,
        maxlength: 8,
    },
    introduction: String,
    university: String,
    create_date: {type: Date, default: Date.now},
    last_update: {type: Date},
    events:
        // type: [mongoose.Schema.Types.ObjectId],
        [
        {
            eventName: String,
            dateTime: [Date]
        }
        ],
    capacity:Number,
    location:String,


});
const Group = mongoose.model('Group', groupSchema);
async function getGroups(queryParams){
    const result = await Group.find(queryParams)
            .sort({'create_date': -1});
    debug("Returning the query result: ", result);
    return result;

}
async function createGroup(doc){
    // if(reqBody._id){
    //     debug('updating group');
    //     debug('finding group by id: ', reqBody._id );
    //     let group = await Group.findById(reqBody._id);
    //     debug('find group result: ', group);
    //     group.update(reqBody);
    //     debug('updated')
    //     return 'ok';
    // }
    // else{
        debug("creating group", doc);
        
        let newGroup = new Group(doc);
        await newGroup.save();
        debug("group saved");
        return newGroup.ObjectId;

    }
async function addMember(groupId, userId){
    debug('adding a member');
    let group = await Group.findById(groupId);
    //if theres available seat
    if(group.members.length < group.capacity){
        //add the member
        group.members.push(userId);
        group.last_update = Date.now();
        await group.save();

    }
    else{
        throw 'No more space in the group';
    }

}
async function deleteMember(groupId, userId){
    debug('deleting a member');
    let group = await Group.findById(groupId);
    //if theres available seat
    if(group.members.length > 1){
        //delete the member
        // group.members.pull(userId);
        let index = group.members.indexOf(userId);
        group.members.splice(index, 1);
        group.last_update = Date.now();
        await group.save();

    }
    else{
        throw 'Cannot remove the only member';
    }

}

async function modifyCapacity(groupId, newCapacity){
    debug('modifing capacity');
    let group = await Group.findById(groupId);
    //if theres available seat
    if(group.members.length <= newCapacity ){
        //delete the member
        group.capacity = newCapacity;
        group.last_update = Date.now();
        await group.save();

    }
    else{
        throw 'new capacity is smaller than the number of existing members';
    }

}
async function updateGroup(doc){
    debug('updating group');
    // debug('finding group by id: ', doc._id );
    // let group = await Group.findById(doc._id);
    // debug('find group result: ', group);
    // group.overwrite({
    //     university:doc.university,
    //     introduction:doc.introduction,
    //     capacity: doc.capacity,
    //     events: doc.events,
    //     location: doc.location,
    //     members: doc.members,
    //     last_update:Date.now,
    // });
    let modified = await Group.findByIdAndUpdate(doc._id, doc);
    // await modified.save();
    // await group.save();
    debug('group updated', modified);
    return 'ok';


}
// group.updateOne({author: "Haru"}, {bounty: 10}, function(err, docs){
//     if(err) console.log(err);
//     console.log('更改成功：' + docs);
// });
// const p = new group({title: 'french tutoring', author:'Wang', content: 'french tutor wanted dufiuwehfoiusheoirfuhirefireheigug', location:'South Shore', bounty: 50 });
// p.save();
module.exports = Group;
module.exports.getGroups = getGroups;
module.exports.createGroup = createGroup;
module.exports.updateGroup = updateGroup;
module.exports.addMember = addMember;