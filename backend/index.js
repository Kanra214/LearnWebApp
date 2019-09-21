const express = require('express');
const posts = require('./routes/posts');
const users = require('./routes/users');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/packet_money_database')
    .then(()=>{
        console.log('connected to database');
    })
    .catch(err =>{
        console.log('Could not connect to database: ' + err);
    });

app.get('/*',function(req,res,next){
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

     // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

app.use('/api/posts', posts);
app.use('/api/users', users)

const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log("listening on " + port);

});
