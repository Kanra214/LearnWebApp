const express = require('express');
const router = express.Router();
const User = require('../models/user');
const debug = require('debug')('app:users');


router.get('/checkusernametaken', async (req, res) => {
    try{
        debug("receive checkUsernameTaken request with query: ", req.query);
        debug("req query ", req.query);
        const attemptedUsername = req.query.attemptedUsername;
        debug("attemp username: ", attemptedUsername);
        const result = await User.checkUsernameTaken(attemptedUsername);
        if(result === false){
            res.status(200).send({"usernameTaken":"false"});
        }
        else{
            res.status(200).send({"usernameTaken":"true"});
        }
    }
    catch(error){
        debug('err:', error);
    }
});
router.get('/checkemailtaken', async (req, res) => {
    try{
        debug("receive checkEmailTaken request with query: ", req.query);
        debug("req query ", req.query);
        const attemptedEmail = req.query.attemptedEmail;
        debug("attemp email: ", attemptedEmail);
        const result = await User.checkEmailTaken(attemptedEmail);
        if(result === false){
            res.status(200).send({"emailTaken":"false"});
        }
        else{
            res.status(200).send({"emailTaken":"true"});
        }
    }
    catch(error){
        debug('err:', error);
    }
});



router.get('/', async (req, res) =>{
    try{
        debug("receive query query: ", req.query);
        const result = await User.getUser(queryParam);
        debug("sending the result: ", result);
        res.send(result);
    }
    catch(error){
        debug('err:',error);

    }

});

module.exports = router;


