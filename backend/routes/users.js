const express = require('express');
const router = express.Router();
const user = require('../models/user');
const debug = require('debug')('app:posts');

router.get('/checkUsernameTaken', async (req, res) => {
    try{
        debug("receive checkUsernameTaken request with params: ", req.params);
        const attemptUsername = req.params.attemptUsername;
        debug("attemp username: ", req.params.attemptUsername);
        const result = await user.checkUsernameTaken(attemptUsername);
        if(result){
            res.status(200).send("username is unique.");
        }
        else{
            res.status(409).send("username is taken.");
        }
    }
    catch(error){
        debug('err:', error);
    }
});
router.get('/', async (req, res) =>{
    try{
        debug("receive query params: ", req.query);
        const result = await user.getUser(queryParam);
        debug("sending the result: ", result);
        res.send(result);
    }
    catch(error){
        debug('err:',error);

    }

});

module.exports = router;


