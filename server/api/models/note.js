const db = require('./db')

const note = db.Schema({
    username: { type: String, required: true},
    content: { type: Object, required: false}
})

module.exports = db.model('Note', note)