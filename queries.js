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
    }
}