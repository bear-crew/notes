
const router = require('express').Router() // импортируем роутер

const User = require('./models/user')
const Note = require('./models/note')
// импортируем файл конфигурации (баловство, конечно, надо генерировать это на лету и хранить где-нибудь)
const config = require('../config')


router.post('/note', function (req, res, next){
    let note = new Note
    note.username = "aass2" //to fix
    note.content = req.body.content
    const user = User.findOne({username: note.username})
    if(user)
    {
        note.save(function (err) {
            if (err) {
                res.sendStatus(500)
            }
            else {
                res.sendStatus(201)
            }
    
        })    
    }    
})

router.get('/note', function (req, res, next) {
    const name = req.body.username;
    Note.find({username: name}, function(err, note) {
        if (err) {return res.sendStatus(500)}
        else {
            res.json(note)
        }
    })
   // return res.sendStatus(200);
})

module.exports = router