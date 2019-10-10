const mongoose = require('mongoose');
const debug = require('debug')('app:db');
const jwt = require('jsonwebtoken');
const config = require('config');
const userSchema = new mongoose.Schema({
   username:{
       type: String,
       required: true,
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

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id, username:this.username}, config.get('jwtPrivateKey'));
    return token;
};
const User = mongoose.model('User', userSchema);
async function getUser(queryParams){
    const result = await User.find(queryParams);
    debug("Returning the query result: ", result);
    return result;

}

async function findUser(email){
    debug('finding user by email: ', email );
    let user = await User.findOne({email: email});
    debug('find user result: ', user);
    return user;
}
async function checkUsernameTaken(username){
    debug("username: ", username);
    result = await User.exists({'username': username});
    debug("checkUsernameTaken result ", result);
    return result;   

}

async function checkEmailTaken(username){
    debug("email: ", username);
    result = await User.exists({'email': username});
    debug("checkEmailTaken result ", result);
    return result;   

}
// Post.updateOne({author: "Haru"}, {bounty: 10}, function(err, docs){
//     if(err) console.log(err);
//     console.log('更改成功：' + docs);
// });
// const p = new Post({title: 'french tutoring', author:'Wang', content: 'french tutor wanted dufiuwehfoiusheoirfuhirefireheigug', location:'South Shore', bounty: 50 });
// p.save();
module.exports = User;
module.exports.checkUsernameTaken = checkUsernameTaken;
module.exports.checkEmailTaken = checkEmailTaken;
// module.exports.getUser = getUser;
module.exports.findUser = findUser;