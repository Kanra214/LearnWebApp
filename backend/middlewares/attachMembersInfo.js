const User = require('../models/user');
const debug = require('debug')('app:groups');


async function attachMembersInfo(req, res){
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
    for(let i = 0; i < newResBody.length; i++){
        let members = newResBody[i].members;
        let newMembers = [];
        for(let member of members){
            const newMember = await User.findById(member);
            newMembers.push({_id: newMember._id, email: newMember.email, username: newMember.username});


        }
        debug('newMembers ', newMembers);
        newResBody[i].members = newMembers;
        debug('res body ', newResBody[i].members);
    }
    
    // for(let group of res.body){
        
    //     let membersInfoList = [];
    //     for(let member of group.members){
    //         const user = User.findById(member);
    //         membersInfoList.push({_id: member, email: user.email, username: user.username});
    //     }
    //     group.members = membersInfoList;
    //     debug('members info', membersInfoList);

    // }
    debug('sending response ', newResBody);
    res.status(200).send(newResBody);

}

module.exports = attachMembersInfo;