const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config')
const User = require('./models/user')

/*
    Recieves username(res.body.username) and password(res.body.password).
    Looks for user with res.body.username in DB, gets his passwords hash and compare to res.body.password with bcrypt.
    In case of success returns token.
*/
router.post ('/login', function(req, res, next) {
    if (!req.body.username || !req.body.password) {
        return res.sendStatus(400); // If there is no password or username in request or both - 400 Bad Request
    } 
    else {
        const username = req.body.username;
        const password = req.body.password;
        User.findOne({username: username})
        .select('password') // get password hash from DB
        .exec(function(err, user) {
            if (err) 
                return res.sendStatus(500);

            if (!user) 
                return res.sendStatus(401);
            bcrypt.compare(password, user.password, function(err, valid){
                if (err)
                    return res.sendStatus(500);

                if (!valid)
                    return res.sendStatus(401);
                const token = jwt.sign({exp: Math.floor(Date.now() / 1000) + (60*60*36), data: username}, config.secretkey);
                res.send(token);
            });
        });
    } 
});

module.exports = router;