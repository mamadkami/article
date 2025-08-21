exports.up = function (knex) {
    return knex.schema.createTable('stats', (table) => {
      table.increments('id').primary();
      table.string('number').notNullable();
      table.string('label').notNullable();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('stats');
  };