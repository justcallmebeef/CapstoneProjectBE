const express = require('express') 
const app = express() 
const queries = require('./queries')
const morgan = require('morgan')
const bodyParser  = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3002 

app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Please add climbers to end of URL')
})

app.get('/climbers', (req, res, next) => {
    queries.listAllClimbers().then(climbers => res.send(climbers)).catch(next)
})

app.use(notFound)
app.use(errorHandler)

function notFound(req, res, next) {
  res.status(404).send({error: 'Not found!', status: 404, url: req.originalUrl})
}

function errorHandler(err, req, res, next) {
  console.error('ERROR', err)
  const stack =  process.env.NODE_ENV !== 'production' ? err.stack : undefined
  res.status(500).send({error: err.message, stack, url: req.originalUrl})
}

app.listen(port)