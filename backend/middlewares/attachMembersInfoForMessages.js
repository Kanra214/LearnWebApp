const User = require('../models/user');
const debug = require('debug')('app:messages');


async function attachMembersInfoForMessages(req, res){
    debug('attaching members info');
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
            const fromId = newResBody[i].from;
            const from = await User.findById(fromId);
            newResBody[i].from = {_id: from._id, email: from.email, username: from.username};
        }
        for(let i = 0; i < newResBody.length; i++){
            const toId = newResBody[i].to;
            const to = await User.findById(toId);
            newResBody[i].to = {_id: to._id, email: to.email, username: to.username};
        }
    debug('changed res body ', newResBody);

    
    }
    debug('sending response ', newResBody);
    res.status(200).send(newResBody);

}

module.exports = attachMembersInfoForMessages;