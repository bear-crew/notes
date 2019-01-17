
const router = require('express').Router() // импортируем роутер

const User = require('./models/user')
const Note = require('./models/note')
// импортируем файл конфигурации (баловство, конечно, надо генерировать это на лету и хранить где-нибудь)
const config = require('../config')



router.post('/note', function (req, res, next) { // TODO: test 
    const token = req.headers['x-auth'];
    const noteId = req.body.noteId;
    const userNote = req.body.note;

    if (!token) 
        return res.sendStatus(401);

    let _username;
    try {
        _username = jwt.verify(token, config.secretkey).data;
    } catch(err) {
        return res.sendStatus(401)
    }    

    if (noteId) {
        if (userNote) {
            // update content to userNote with noteId
            Note.findOne({_id: noteId, username: _username}, function(err, note) {
                if (err) 
                    return res.sendStatus(500);
                else {
                    note.content = userNote;
                    note.save(function(err) {
                        if (err) 
                            res.sendStatus(500);
                        else
                            res.sendStatus(200) // updated successfully
                    })
                }
            })
        }
        else { // user didn't send any content to update
            res.sendStatus(400);
        }
    }
    else { // user didn't send any id
        if (userNote) { // creating new note
            let newNote = new Note;
            newNote.username = _username;
            newNote.content = userNote;
            newNote.save(function(err) {
                if (err) 
                    res.sendStatus(500);
                else
                    res.sendStatus(200);
            })
        }
        else 
            res.sendStatus(400);
    }
})

router.get('/note', function (req, res, next) {
    const token = req.headers['x-auth'];

    if (!token) 
        return res.sendStatus(401);

    let _username;
    try {
        _username = jwt.verify(token, config.secretkey).data;
    } catch(err) {
        return res.sendStatus(401)
    }    
    
    Note.find({username: _username}, function(err, notes) {
        if (err) {return res.sendStatus(500)}
        else {
            res.json(notes)
        }
    })
   // return res.sendStatus(200);
})

router.get('/deletenote', function(req, res, next) {
    const token = req.headers['x-auth'];
    const noteId = req.body.noteId;

    if (!token) 
        return res.sendStatus(401);

    let _username;
    try {
        _username = jwt.verify(token, config.secretkey).data;
    } catch(err) {
        return res.sendStatus(401);
    }    

    if (noteId) {
        // delete note
        Note.remove({_id: noteId, username: _username}, function(err) {
            if (err) 
                res.sendStatus(500);
            else
                res.sendStatus(200);
        })
    }
    else
        res.sendStatus(400);
})

module.exports = router