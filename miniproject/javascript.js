// List of recipes with corresponding ingredients
const recipes = [
    {
        name: "Cake",
        ingredients: ["wheat flour", "milk","egg" ,"sugar"],
    },
    {
        name: "Salad",
        ingredients: ["cucumber", "tomato","cheese", "lettuce"],
    },
    {
        name: "Omelette",
        ingredients: ["eggs", "oil"],
    },
    {
        name: "Roti",
        ingredients: ["Wheat flour"],
    }
];

let selectedIngredients = [];

function selectIngredient(ingredient) {
  if (!selectedIngredients.includes(ingredient)) {
    selectedIngredients.push(ingredient);
  } else {
    const index = selectedIngredients.indexOf(ingredient);
    selectedIngredients.splice(index, 1);
  }
}

function showRecipes() {
  // Logic to show recipes based on selectedIngredients
  console.log('Selected Ingredients:', selectedIngredients);
}