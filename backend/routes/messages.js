const express = require('express');
const router = express.Router();
const clean = require('../util/clean-query');
const Message = require('../models/message');
const debug = require('debug')('app:messages');
const auth = require('../middlewares/auth');
const attachMembersInfoForGetMessages = require('../middlewares/attachMembersInfoForMessages');
const Group = require('../models/group');
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
    debug("a create message request");
    let doc = req.body;
    doc['from'] = req.user._id;
    try{

            //is it a response to group request?
            if((req.body.message_type == 2 || req.body.message_type == 3)){
                //if yes to the request
                if(req.body.message_type == 2){
                //try to add member to the group]
                    try{
                        await Group.addMember(req.body.groupId, req.body.to);
                        await Message.approveMessage(req.body.last_message);

                        
                    }
                    catch(error){
                        debug('error', error);
                        res.status(400).send(error);
                        let group = await Group.findById(req.body.groupId);
                        doc.content = "You cannot join the group " + group.subject + " because it's full";
                        doc.message_type = 0;
                        await Message.createMessage(doc);
                        return;


                    }

                }
                //if its no to the request, do nothing and create the message
            }
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


