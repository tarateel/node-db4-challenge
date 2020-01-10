exports.seed = async (knex) => {
  await knex('steps').insert([
    { step_name: 'Spread butter onto 2 slices of bread.' },
    { step_name: 'Place 1 to 2 slices of cheese between the slices of bread.' },
    { step_name: 'Fry until golden brown.' },
    { step_name: 'Flip and fry other side.' },
    { step_name: 'Spread peanut butter onto a slice of bread.' },
    { step_name: 'Spread jelly onto a slice of bread.' },
    { step_name: 'Put the two slices of bread together.' },
    { step_name: 'Boil eggs.' },
    { step_name: 'Peel and mash boiled eggs}.' },
    { step_name: 'Mix with mayonnaise to desired consistency.' },
    { step_name: 'Spread egg and mayonnaise mixture onto slice of bread.' },
    { step_name: 'Cover with 2nd slice of bread.' },
    { step_name: 'Enjoy!' },
  ])
};
