const router = require('express').Router();
const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('./models/user');

/* 
    Returns username if token is valid, else 401.
*/
router.get('/account', function(req, res, next) {
    if (!req.headers['x-auth']) 
        return res.sendStatus(401);

    let username;
    
    try {
        username = jwt.verify(req.headers['x-auth'], config.secretkey).data;
    } catch(err) {
        return res.sendStatus(401);
    }    
    User.findOne({username: username}, function(err, user) {
        if (err) { // DB error
            return res.sendStatus(500);
        } 
        if (!user)
            return res.sendStatus(401) // theres is no such user in DB, return 401 - Unauthorized
        res.json(user) // everything is ok, return user
    })
})

module.exports = router;