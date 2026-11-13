const recipes = [
  {
    id: 1,
    name: "Cheesy Potato Omelette",
    ingredients: "eggs, potatoes, cheese",
    instructions: "Slice boiled potatoes, whisk eggs with cheese, and fry on low heat for 10 minutes.",
  },
  {
    id: 2,
    name: "Vegetable Fried Rice",
    ingredients: "rice, carrots, peas, eggs",
    instructions: "Stir-fry leftover vegetables and rice with soy sauce and scrambled egg.",
  },
  {
    id: 3,
    name: "Crispy Bread Croutons",
    ingredients: "bread, olive oil, garlic",
    instructions: "Cut stale bread into cubes, toss with oil and garlic, and bake until golden.",
  },
];

function validateRecipe(body) {
  if (!body || !body.name || typeof body.name !== "string" || !body.name.trim()) {
    return "Recipe name is required.";
  }
  if (!body.ingredients || typeof body.ingredients !== "string" || !body.ingredients.trim()) {
    return "Ingredients field is required.";
  }
  return null;
}

module.exports = {
  recipes,
  validateRecipe,
};