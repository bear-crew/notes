const mongoose = require('mongoose')
const db_url = process.env.MONGODB_URL || process.env.MONGOLAB_URI || 'mongodb://localhost/user-management-example'
mongoose.connect(db_url, function(){
    console.log('MongoDB connected sucessfully')
})

module.exports = mongoose