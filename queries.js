const database = require('./database-connection')

module.exports = {
    listAllClimbers() {
        return database('climbers')
    }, 
    getClimbersById(id) {
        return database('climbers').where('id', id).first()
    }, 
    createClimber(climber) {
        return database('climbers').insert(climber).returning('*')
    }, 
    deleteClimber(id) {
        return database('climbers').where('id', id).delete()
    }, 
    updateClimber(id, climber) {
        return database('climbers').where('id', id).update(climber).returning('*')
    },
    listAllRoutes() {
        return database('routes')
    }, 
    getRoutesById(id) {
        return database('routes').where('id', id).first()
    }, 
    createRoute(route) {
        return database('routes').insert(route).returning('*')
    }, 
    deleteRoute(id) {
        return database('routes').where('id', id).delete()
    }, 
    updateRoute(id, route) {
        return database('routes').where('id', id).update(route).returning('*')
    }
}