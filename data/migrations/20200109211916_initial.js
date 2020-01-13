exports.up = async function(knex) {
  await knex.schema.createTable('recipes', (table) => {
    table.increments('id')
    table.string('recipe_name').notNullable()
  })

  await knex.schema.createTable('ingredients', (table) => {
    table.increments('id')
    table.string('ingredient_name').notNullable()
  })

  await knex.schema.createTable('steps', (table) => {
    table.increments('id')
    table.string('step_name').notNullable()
  })

  await knex.schema.createTable('recipes_ingredients', (table) => {
    table.integer('recipe_id')
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    table.integer('ingredient_id')
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    table.primary(['recipe_id', 'ingredient_id'])
  })


  await knex.schema.createTable('recipes_steps', (table) => {
    table.integer('recipe_id')
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    table.integer('step_id')
      .notNullable()
      .references('id')
      .inTable('steps')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    table.primary(['recipe_id', 'step_id'])
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('recipes_steps')
  await knex.schema.dropTableIfExists('recipes_ingredients')
  await knex.schema.dropTableIfExists('recipes')
  await knex.schema.dropTableIfExists('ingredients')
  await knex.schema.dropTableIfExists('steps')
};
