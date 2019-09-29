const express = require('express');
const router = express.Router();
const user = require('../models/user');
const debug = require('debug')('app:users');

router.get('/checkUsernameTaken', async (req, res) => {
    try{
        debug("receive checkUsernameTaken request with query: ", req.query);
        debug("req query ", req.query);
        const attemptedUsername = req.query.attemptedUsername;
        debug("attemp username: ", attemptedUsername);
        const result = await user.checkUsernameTaken(attemptedUsername);
        if(result){
            res.status(409).send({"message":"username is taken."});
        }
        else{
            res.status(200).send({"message":"username is unique."});
        }
    }
    catch(error){
        debug('err:', error);
    }
});
router.get('/', async (req, res) =>{
    try{
        debug("receive query query: ", req.query);
        const result = await user.getUser(queryParam);
        debug("sending the result: ", result);
        res.send(result);
    }
    catch(error){
        debug('err:',error);

    }

});

module.exports = router;


