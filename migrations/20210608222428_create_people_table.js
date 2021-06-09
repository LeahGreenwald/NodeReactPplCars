
exports.up = function(knex) {
    return knex.schema.createTable('people', table => {
        table.increments('id').primary();
        table.string('firstName');
        table.string('lastName');
        table.integer('age');
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('people');
};
