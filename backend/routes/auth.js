const auth = require('../middlewares/auth');
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const debug = require('debug')('app:auth');
const bcrypt = require('bcryptjs');ç
const _ = require('lodash');

router.post('/signup', async(req, res) => {
    let newUser = new User({
        username: req.body.username, 
        email: req.body.email,
        password: req.body.password
    });
    
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    
    await newUser.save(); 
    const token = newUser.generateAuthToken();
    const resBody = {token:token};
    res.status(200).send(resBody);

});


router.post('/login', async (req, res) => {
    let user = await User.findUser(req.body.email);
    if(!user) return res.status(400).send('Invalid email or password.');
    
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send('Invalid email or password.');
    const token = user.generateAuthToken();
    
    //send something
    const resBody = {token:token};
    res.status(200).send(resBody);

});


module.exports = router;