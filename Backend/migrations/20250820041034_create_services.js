exports.up = function (knex) {
    return knex.schema.createTable('services', (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.text('description');
      table.json('features').notNullable();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('services');
  };