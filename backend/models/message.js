const mongoose = require('mongoose');
const debug = require('debug')('app:db');



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
    read: Boolean,
    isRequest: Boolean,
    isApproved: Boolean,
    


});
const message = mongoose.model('message', messageSchema);
async function getMessages(queryParams){
    const result = await message.find(queryParams)
            .sort('-date');
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
        return newMessage.ObjectId;

    }
// async function updatemessage(doc){
//     debug('updating message');
//     debug('finding message by id: ', doc._id );
//     let message = await message.findById(doc._id);
//     debug('find message result: ', message);
//     message.update({
//         subject:doc.subject,
//         university:doc.university,
//         introduction:doc.introduction,
//         capacity: doc.capacity,
//         events: doc.events,
//         members: doc.members,
//         last_update:Date.now,
//     });
//     debug('message updated')
//     return 'ok';


// }
// message.updateOne({author: "Haru"}, {bounty: 10}, function(err, docs){
//     if(err) console.log(err);
//     console.log('更改成功：' + docs);
// });
// const p = new message({title: 'french tutoring', author:'Wang', content: 'french tutor wanted dufiuwehfoiusheoirfuhirefireheigug', location:'South Shore', bounty: 50 });
// p.save();
module.exports = message;
module.exports.getMessages = getMessages;
module.exports.createMessage = createMessage;
// module.exports.updatemessage = updatemessage;