const express = require('express');
const router = express.Router();
const clean = require('../util/clean-query');
const post = require('../models/post');
const debug = require('debug')('app:posts');


router.get('/', async (req, res) =>{
    try{
        debug("receive query params: ", req.query);
        const queryParam = clean(req.query);
        debug("cleaned the param: ", queryParam);
        const result = await post.getPosts(queryParam);
        debug("Sending the result: ", result);
        res.send(result);
    }
    catch(error){
        debug('err:',error);

    }

});

module.exports = router;


