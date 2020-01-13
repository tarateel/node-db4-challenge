exports.seed = async (knex) => {
  await knex('ingredients').insert([
    { ingredient_name: 'Two slices of bread' },
    { ingredient_name: 'One to two slices of cheese' },
    { ingredient_name: 'Butter' },
    { ingredient_name: 'Tbsp of peanut butter'},
    { ingredient_name: 'Tbsp of jelly' },
    { ingredient_name: 'Four to six eggs' },
    { ingredient_name: 'One to 4 tbsp mayonnaise' }
  ])
};
