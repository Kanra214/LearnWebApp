const jwt = require('jsonwebtoken');
const debug = require('debug')('app:auth');
const config = require('config');
const User = require('../models/user');
async function auth(req, res, next){
    const token = req.header('token');
    if(!token){ 
        debug('no token provided');
        return res.status(401).send('Access denied, no token provided');
    
}
    try{
        const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
        const user = await User.findUser(decoded.email);
        if(!user){
            debug("did not find user");
            return res.status(400).send('Invalid token');
        }
        next();
    }
    catch(ex){
        res.status(400).send('Invalid token');
        debug('invalid token');
    }
}

module.exports = auth;