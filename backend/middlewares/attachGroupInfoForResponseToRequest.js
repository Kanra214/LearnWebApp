const Group = require('../models/group');
const debug = require('debug')('app:messages');
// const attachMembersInfoForMessages = require('./attachMembersInfoForMessages');


async function attachGroupInfoForResponseToRequest(req, res, next){
    debug('attaching group info');
    if(res.body.message_type !== 1){
        debug('not a request, no group id, skip attach groupInfo');
        next();
    }
    // const getMembersInfo = (memberId) =>{
    //     const user = User.findById(memberId);
    //     {_id: member, email: user.email, username: user.username}
    // }
    // res.body.forEach(group => {
    //     group.members.forEach(async member =>{
    //         const user = await User.findById(member);
    //         debug('found user ', user);
    //         member = {_id: user._id, email: user.email, username: user.username};
    //         debug('member', member);
    //     });
        
        
    // });
    //deep copy res.body
    
    let newResBody = JSON.parse(JSON.stringify(res.body));
    debug("newResBody ", newResBody);
    if(newResBody.length === 0){
        debug('empty messages');
        

    }
    else{
        for(let i = 0; i < newResBody.length; i++){
            const groupId = newResBody[i].groupId;
            const group = await Group.findById(groupId);
            newResBody[i].groupInfo = {_id: group._id, subject: group.subject};
        }
        
    debug('changed res body ', newResBody);

    
    }
    debug('sending response ', newResBody);
    res.status(200).send(newResBody);

}

module.exports = attachGroupInfoForResponseToRequest;