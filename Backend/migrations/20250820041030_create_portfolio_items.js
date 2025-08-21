exports.up = function (knex) {
    return knex.schema.createTable('portfolio_items', (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.string('category').notNullable();
      table.string('image').notNullable();
      table.integer('likes').defaultTo(0);
      table.integer('views').defaultTo(0);
      table.text('description');
      table.json('tags').notNullable();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('portfolio_items');
  };