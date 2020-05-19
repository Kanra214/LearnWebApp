const mongoose = require('mongoose');
const debug = require('debug')('app:messages');



const messageSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    create_date: {type: Date, default: Date.now},
    read: {type: Boolean, default: false},
    isRequest: {type: Boolean, default: null},
    isApproved: {type: Boolean, default: null},
    last_update: {type: Date},
    groupId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
    }
    


});
const message = mongoose.model('message', messageSchema);
async function getMessages(queryParams){
    const result = await message.find(queryParams)
            .sort({'create_date': -1});
    debug("Returning the query result: ", result);
    return result;

}
async function createMessage(doc){
    // if(reqBody._id){
    //     debug('updating message');
    //     debug('finding message by id: ', reqBody._id );
    //     let message = await message.findById(reqBody._id);
    //     debug('find message result: ', message);
    //     message.update(reqBody);
    //     debug('updated')
    //     return 'ok';
    // }
    // else{
        debug("creating message", doc);
        
        let newMessage = new message(doc);
        await newMessage.save();
        debug("message saved");
        return newMessage;

    }
async function updateMessage(doc){
    debug('updating message');
    debug('finding message by id: ', doc._id );
    let result = await message.findById(doc._id);
    debug('find message result: ', result);
    debug('update last update');
    doc['last_update'] = Date.now();
    result.overwrite(doc);
    await result.save();
    debug('message updated')
    return result;


}
// message.updateOne({author: "Haru"}, {bounty: 10}, function(err, docs){
//     if(err) console.log(err);
//     console.log('更改成功：' + docs);
// });
// const p = new message({title: 'french tutoring', author:'Wang', content: 'french tutor wanted dufiuwehfoiusheoirfuhirefireheigug', location:'South Shore', bounty: 50 });
// p.save();
module.exports = message;
module.exports.getMessages = getMessages;
module.exports.createMessage = createMessage;
module.exports.updateMessage = updateMessage;