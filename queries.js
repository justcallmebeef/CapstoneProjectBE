const database = require('./database-connection')

module.exports = {
    listAllClimbers() {
        return database('climbers')
    }
}