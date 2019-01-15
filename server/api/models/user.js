const db = require('./db')
const user = db.Schema({
    username: { type: String, required: true},
    password: { type: String, required: true, select: false}
})

module.exports = db.model('User', user)
