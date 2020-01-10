exports.seed = async (knex) => {
  await knex('recipes').insert([
    { recipe_name: 'Grilled Cheese Sandwich' },
    { recipe_name: 'PB&J Sandwich' },
    { recipe_name: 'Egg Salad Sandwich'}
  ])
};
