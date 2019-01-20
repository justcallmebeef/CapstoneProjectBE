const express = require('express') 
const app = express() 
const queries = require('./queries')
const port = process.env.PORT || 3002 

app.get('/', (req, res) => {
    res.send('Please add climbers to end of URL')
})

app.get('/climbers', (req, res, next) => {
    queries.listAllClimbers().then(climbers => res.send(climbers)).catch(next)
})

// The following 2 `app.use`'s MUST follow ALL your routes/middleware
app.use(notFound)
app.use(errorHandler)

function notFound(req, res, next) {
  res.status(404).send({error: 'Not found!', status: 404, url: req.originalUrl})
}

// eslint-disable-next-line
function errorHandler(err, req, res, next) {
  console.error('ERROR', err)
  const stack =  process.env.NODE_ENV !== 'production' ? err.stack : undefined
  res.status(500).send({error: err.message, stack, url: req.originalUrl})
}

app.listen(port)