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
  res.send('Please add /climbers to the end of URL for climber_users data or /routes for route data')
})

app.get('/climbers', (req, res, next) => {
  queries.listAllClimbers().then(climbers => res.send(climbers)).catch(next)
})

app.get('/climbers/:id', (req, res, next) => {
  queries.getClimbersById(req.params.id).then(climberById => res.json(climberById)).catch(next)
})

app.post('/climbers', (req, res) => {
  queries.createClimber(req.body).then(newClimber => res.json(newClimber[0]))
})

app.delete('/climbers/:id', (req, res) => {
  queries.deleteClimber(req.params.id).then(res.sendStatus(204))
})

app.put('/climbers/:id', (req, res) => {
  queries.updateClimber(req.params.id, req.body).then(updatedClimber => res.json(updatedClimber[0]))
})

app.get('/routes', (req, res, next) => {
  queries.listAllRoutes().then(routes => res.json(routes)).catch(next)
})

app.get('/routes/:id', (req, res, next) => {
  queries.getRoutesById(req.params.id).then(routeById => res.json(routeById)).catch(next)
})

app.post('/routes', (req, res) => {
  queries.createRoute(req.body).then(newRoute => res.json(newRoute[0]))
})

app.delete('/routes/:id', (req, res) => {
  queries.deleteRoute(req.params.id).then(res.sendStatus(204))
})

app.put('/routes/:id', (req, res) => {
  queries.updateRoute(req.params.id, req.body).then(updatedRoute => res.json(updatedRoute[0]))
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