const mongoose = require('mongoose');
const debug = require('debug')('app:db');

const userSchema = new mongoose.Schema({
   username:{
       type: String,
       required: true,
       maxlength:50,
       unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,

    }
   
});
const User = mongoose.model('User', userSchema);
async function getUser(queryParams){
    const result = await User.find(queryParams);
    debug("Returning the query result: ", result);
    return result;

}
async function checkUsernameTaken(username){
    debug("username: ", username);
    result = await User.exists({'username': username});
    debug("checkUsernameTaken result ", result);
    return result;



}
// Post.updateOne({author: "Haru"}, {bounty: 10}, function(err, docs){
//     if(err) console.log(err);
//     console.log('更改成功：' + docs);
// });
// const p = new Post({title: 'french tutoring', author:'Wang', content: 'french tutor wanted dufiuwehfoiusheoirfuhirefireheigug', location:'South Shore', bounty: 50 });
// p.save();
module.exports.User = User;
module.exports.checkUsernameTaken = checkUsernameTaken;
module.exports.getUser = getUser;