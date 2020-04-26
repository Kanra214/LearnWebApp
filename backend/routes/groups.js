const express = require('express');
const router = express.Router();
const clean = require('../util/clean-query');
const group = require('../models/group');
const debug = require('debug')('app:groups');


router.get('/', async (req, res) =>{
    try{
        debug("receive query params: ", req.query);
        const queryParam = clean(req.query);
        debug("cleaned the param: ", queryParam);
        const result = await group.getgroups(queryParam);
        debug("sending the result: ", result);
        res.status(200).send(result);
    }
    catch(error){
        debug('err:',error);

    }

});

module.exports = router;


