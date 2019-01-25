const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/user');
const config = require('../config');

/*
    Encrypts password from request with bcrypt and saves result in DB.
*/
router.post('/user', function (req, res, next) {
    let user = new User;
    user.username = req.body.username;
    const password = req.body.password;

    User.findOne({username: user.username}, function(err, result) {
        if (err) 
            return res.sendStatus(500);
        if (result) 
            return res.send("Sorry, username is occupied");

        bcrypt.hash(password, 10, function(err, hash) {
            if (err)
                res.sendStatus(500);
            else {
                user.password = hash;
                user.save(function (err) {
                    if (err) 
                        res.sendStatus(500);
                    else 
                        res.sendStatus(201);
                });
            }
        });
    });
});

/*
    Decrypts token from x-auth header if there is one with jsonwebtoken, after that looks for user with decoded username from token in DB.
    In success returns user JSON without password.
*/
router.get('/user', function (req, res, next) {
    if(!req.headers['x-auth']) 
        return res.sendStatus(401);

    let auth;
    try {
        auth = jwt.verify(req.headers['x-auth'], config.secretkey).data;
    } catch (err) {
        return res.sendStatus(401);
    }

    User.findOne({username: auth}, function(err, user) {
        if (err) 
            return res.sendStatus(500);
        else 
            res.json(user);
    });
});

router.get('/checkuser', function (req, res, next) {
    User.findOne({username: req.body.username}, function(err, user) {
        if (err) 
            return res.sendStatus(500);
        else 
            if (user)
                res.send(true);
            else
                res.send(false);
    });
});

module.exports = router;