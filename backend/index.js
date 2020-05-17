const express = require('express');
const groups = require('./routes/groups');
const users = require('./routes/users');
const auth = require('./routes/auth');
const messages = require('./routes/messages');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('config');
const isDocker = require('is-docker');

if(!config.get('jwtPrivateKey')){
    console.error("FATAL ERROR: jwtPrivateKey is not defined");
    process.exit(1);
}

let dbhost = 'localhost';
if(isDocker()){
    dbhost = 'mongo'
}
// const dbport = process.env.DBHOST | 27027
mongoose.connect('mongodb://' +  dbhost + '/packet_money_database')
    .then(()=>{
        console.log('connected to database');
    })
    .catch(err =>{
        console.log('Could not connect to database: ' + err);
    });


app.all('/*',function(req,res,next){
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

     // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, token');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/api/groups', groups);
app.use('/api/messages', messages);
app.use('/api/users', users);
app.use('/api/auth', auth);


const port = process.env.PORT | 3000;
app.listen(port, ()=> {
    console.log("listening on " + port);

});




