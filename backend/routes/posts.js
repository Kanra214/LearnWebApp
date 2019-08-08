const express = require('express');
const router = express.Router();
const clean = require('../util/clean-null-from-object');
const post = require('../models/post');


router.get('/', async (req, res) =>{
    try{
        console.log(req.query);
        const queryParam = clean(req.query);
        console.log(queryParam);
        const result = await post.getPosts(queryParam);
        res.send(result);
    }
    catch(error){
        console.log('err:',error);

    }

});

module.exports = router;


