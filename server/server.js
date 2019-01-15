const express = require('express')

const app = express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(require('./api'))

const server = app.listen(process.env.PORT || 3001, function() {
    console.log('Server up and running in %d ', server.address().port)
})


