const express = require('express');
const router = express.Router();
const clean = require('../util/clean-query');
const Message = require('../models/message');
const debug = require('debug')('app:messages');
const auth = require('../middlewares/auth');
const attachMembersInfoForGetMessages = require('../middlewares/attachMembersInfoForMessages');
// const attachGroupInfoForResponseToRequest = require('../middlewares/attachGroupInfoForResponseToRequest');


router.get('/', auth, async (req, res, next) =>{
    try{
        debug("receive query params: ", req.query);
        const queryParam = clean(req.query);
        debug("cleaned the param: ", queryParam);
        const newQueryParam = {$or: [
            {from: queryParam.userId},
            {to: queryParam.userId}
        ]}
        const result = await Message.getMessages(newQueryParam);
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

},attachMembersInfoForGetMessages );

router.post('/',auth, async(req, res) =>{
    debug("a create group request");
    try{
            let doc = req.body;
            doc['from'] = req.user._id;
            debug("new message ", doc);
            const result = await Message.createMessage(doc);

            debug("sending the result: ", result);
            if(result){
                res.status(200).send(result);
            }
            else{
                throw "cant save message";
            }
                

            
            
        

    }
    catch(error){
        debug('err:', error);
    }

});
router.put('/', auth, async(req, res) =>{
    debug("a update message request");
    debug('req, ',req.body);
    try{

        const result = await Message.updateMessage(req.body);
        if(result){

            res.status(200).send(result);
        }
        else{
            throw "cant update message";
        }
            
        
    }
    catch(error){
        debug('err:', error);
    }
});

module.exports = router;


