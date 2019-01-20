const express = require('express') 
const app = express() 
const queries = require('./queries')
const port = process.env.PORT || 3002 

app.get('/climbers', (req, res) => {
    queries.listAllClimbers().then(climbers => res.send(climbers))
})

app.listen(port)