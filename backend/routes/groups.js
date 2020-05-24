const express = require('express');
const router = express.Router();
const clean = require('../util/clean-query');
const Group = require('../models/group');
const debug = require('debug')('app:groups');
const User = require('../models/user');
const auth = require('../middlewares/auth');
const attachMembersInfoForGetGroups = require('../middlewares/attachMembersInfoForGroups');


router.get('/', async (req, res, next) =>{
    try{
        debug("receive query params: ", req.query);
        const queryParam = clean(req.query);
        debug("cleaned the param: ", queryParam);
        const result = await Group.getGroups(queryParam);
        debug("sending the result: ", result);
        
        if(result){
            res.body = result;
            next();
        }
        else{
            res.status(404).send();
        }
    }
    catch(error){
        debug('err:',error);

    }

},attachMembersInfoForGetGroups );

router.post('/',auth, async(req, res) =>{
    debug("a create group request");
    try{
            let doc = req.body;
            doc['owner'] = req.user;
            doc['members'] = [req.user];
            debug("new group ", doc);
            const result = await Group.createGroup(doc);

            debug("sending the result: ", result);
            res.status(200).send({_id:result});
                

            
            
        

    }
    catch(error){
        debug('err:', error);
    }

});
router.put('/', auth, async(req, res) =>{
    debug("a update group config request");
    try{

        //check if user is the group owner
        const group = Group.findById(req.body._id);
        if(group.owner !== req.user){
            //not a owner
            res.send(401).send();

        }



        const result = await Group.updateGroup(req.body);
        if(result === 'ok'){

            res.status(200).send();
        }
        else{
            res.status(400).send(result);
        }
            
        
    }
    catch(error){
        debug('err:', error);
    }
});

module.exports = router;


