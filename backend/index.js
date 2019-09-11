const express = require('express');
const posts = require('./routes/posts');
const app = express();


app.get('/*',function(req,res,next){
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

     // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

app.use('/api/posts', posts);

const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log("listening on " + port);

});
