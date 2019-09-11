const mongoose = require('mongoose');
const debug = require(debug)('app:db');

mongoose.connect('mongodb://localhost/packet_money_database')
    .then(()=>{
        console.log('connected to database');
    })
    .catch(err =>{
        console.log('Could not connect to database: ' + err);
    });

const postSchema = new mongoose.Schema({
    title: String,
    author: String,
    content: String,
    location: String,
    bounty: Number,
    date: {type: Date, default: Date.now}

});
const Post = mongoose.model('Post', postSchema);
async function getPosts(queryParams){
    const result = await Post.find(queryParams)
            .sort('-date');
    debug("Returning the query result: ", result);
    return result;

}
// Post.updateOne({author: "Haru"}, {bounty: 10}, function(err, docs){
//     if(err) console.log(err);
//     console.log('更改成功：' + docs);
// });
// const p = new Post({title: 'french tutoring', author:'Wang', content: 'french tutor wanted dufiuwehfoiusheoirfuhirefireheigug', location:'South Shore', bounty: 50 });
// p.save();
module.exports.Post = Post;
module.exports.getPosts = getPosts;