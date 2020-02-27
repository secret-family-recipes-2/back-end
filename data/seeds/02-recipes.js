exports.seed = function (knex) {
  return knex("recipes").insert([
    {
      user_id: 1,
      title: "Grilled Peanut Butter and Jelly Sandwich",
      source: "Uncle Patrick",
      ingredients:
        "2 tsp butter, 2 slices of bread, 1 tsp peanut butter, 2 tsp jelly",
      instructions:
        "1.) Heat griddle or skillet to 350 degrees F (175 degrees C). 2.) Spread butter on one side of each slice of bread. Spread peanut butter on unbuttered side of one slice of bread, and jelly on the other. Place one slice, buttered side down on the griddle. Top with other slice, so that peanut butter and jelly are in the middle. Cook for 4 minutes on each side, or until golden brown, and heated through. ",
      category: "Sandwich.",
    },
    {
      user_id: 2,
      title: "Cucumber Sandwiches",
      source: "Auntie Norma",
      ingredients:
        "1 8oz cream cheese, 0.5 cup mayo, 1 0.7 pkg dry italian salad dressing mix, 1 loaf of french bread, 2 medium cucumbers",
      instructions:
        "1.) In a medium bowl, mix together the cream cheese, mayonnaise and Italian dressing mix. Refrigerate for at least 6 hours, or preferably overnight. 2.) Spread the cream cheese blend onto slices of French bread. Top with a cucumber slice. ",
      category: "Sandwich.",
    },
  ]);
};
