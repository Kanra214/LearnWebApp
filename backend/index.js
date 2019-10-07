const express = require('express');
const posts = require('./routes/posts');
const users = require('./routes/users');
const auth = require('./routes/auth');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('config');

if(!config.get('jwtPrivateKey')){
    console.error("FATAL ERROR: jwtPrivateKey is not defined");
    process.exit(1);
}

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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/api/posts', posts);
app.use('/api/users', users);
app.use('/api/auth', auth);

const port = process.env.PORT | 3000;
app.listen(port, ()=> {
    console.log("listening on " + port);

});




