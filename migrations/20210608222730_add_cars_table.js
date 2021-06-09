
exports.up = function(knex) {
    return knex.schema.createTable('cars', table => {
        table.increments('id').primary();
        table.string('make').notNullable();
        table.string('model').notNullable();
        table.string('year');
        table.integer('personId').references('id').inTable('people');
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('cars');
};
