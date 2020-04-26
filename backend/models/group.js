const mongoose = require('mongoose');
const debug = require('debug')('app:db');



const groupSchema = new mongoose.Schema({
    subject: {
        type: String,
        maxlength:100,
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
        maxlength: 10,
    },
    introduction: String,
    university: String,
    date: {type: Date, default: Date.now},
    schedule:[Date],
    maxNumOfMembers:Number,
    location:String


});
const group = mongoose.model('group', groupSchema);
async function getgroups(queryParams){
    const result = await group.find(queryParams)
            .sort('-date');
    debug("Returning the query result: ", result);
    return result;

}
// group.updateOne({author: "Haru"}, {bounty: 10}, function(err, docs){
//     if(err) console.log(err);
//     console.log('更改成功：' + docs);
// });
// const p = new group({title: 'french tutoring', author:'Wang', content: 'french tutor wanted dufiuwehfoiusheoirfuhirefireheigug', location:'South Shore', bounty: 50 });
// p.save();
module.exports = group;
module.exports.getgroups = getgroups;