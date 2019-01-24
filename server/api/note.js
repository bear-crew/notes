const router = require('express').Router();
const User = require('./models/user');
const Note = require('./models/note');
const jwt = require('jsonwebtoken');
const config = require('../config');

router.post('/note', function (req, res, next) { 
    const token = req.headers['x-auth'];
    const noteId = req.body.id;
    const userNote = req.body.note;

    if (!token) 
        return res.sendStatus(401);

    let _username;
    try {
        _username = jwt.verify(token, config.secretkey).data;
    } catch(err) {
        return res.sendStatus(401);
    }    

    if (noteId) {
        if (userNote) {
            // update content to userNote with noteId
            Note.findOne({_id: noteId, username: _username}, function(err, note) {
                if (err) 
                    return res.sendStatus(500);
                if (note) {
                    note.content = userNote;
                    note.save(function(err) {
                        if (err) 
                            return res.sendStatus(500);
                        else {
                            return res.send(note); // updated successfully
                        }
                    })
                }
                else {
                    return res.sendStatus(400);
                }
            })
        }
        else { // user didn't send any content to update
            return res.sendStatus(400);
        }
    }
    else { // user didn't send any id
        if (userNote) { // creating new note
            let newNote = new Note;
            newNote.username = _username;
            newNote.content = userNote;
            newNote.save(function(err) {
                if (err) 
                    return res.sendStatus(500);
                else 
                    return res.json(newNote);                 
            })
        }
        else 
            return res.sendStatus(400);
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
        return res.sendStatus(401);
    }    
    
    Note.find({username: _username}, function(err, notes) {
        if (err) 
            return res.sendStatus(500);
        else 
            return res.json(notes);
    })
})

router.delete('/note', function(req, res, next) {
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
        Note.remove({_id: noteId, username: _username}, function(err, result) {
            if (err) 
                return res.sendStatus(500);
            else
                if (result.n) { //TODO: result.n is not the number of deleted notes
                    return res.sendStatus(200);
                }
                else
                    return res.sendStatus(401);
        });
    }
    else
        return res.sendStatus(400);
});

module.exports = router;