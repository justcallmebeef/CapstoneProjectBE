exports.up = function(knex, Promise) {
    return knex.schema.createTable('routes', (route) => {
        route.increments('id')
        route.string('route_name')
        route.string('route_grade')
        route.integer('route_height') 
        route.integer('climber_id').references('id').inTable('climbers').onDelete('CASCADE')
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("routes")
}
