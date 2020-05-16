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
    events:{
        // type: [mongoose.Schema.Types.ObjectId],
        type: [String],
        ref: 'Event',

    },
    capacity:Number,
    // location:String


});
const Group = mongoose.model('Group', groupSchema);
async function getGroups(queryParams){
    const result = await group.find(queryParams)
            .sort('-date');
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
async function updateGroup(doc){
    debug('updating group');
    debug('finding group by id: ', doc._id );
    let group = await Group.findById(doc._id);
    debug('find group result: ', group);
    group.update({
        subject:doc.subject,
        university:doc.university,
        introduction:doc.introduction,
        capacity: doc.capacity,
        events: doc.events,
        members: doc.members,
        last_update:Date.now,
    });
    debug('group updated')
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