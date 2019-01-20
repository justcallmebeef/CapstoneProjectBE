exports.up = function(knex, Promise) {
    return knex.schema.createTable('climbers', (climber) => {
        climber.increments('id')
        climber.string('first_name')
        climber.string('last_name')
        climber.string('email') 
        climber.string('username')
        climber.string('password')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('climbVertDB')
};
