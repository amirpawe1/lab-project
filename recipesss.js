
const recipes = [
    {
        name: "Cheese Omelette",
        ingredients: ["eggs", "cheese", "milk", "salt"],
        instructions: [
            "Beat the eggs in a bowl.",
            "Add milk, cheese, and salt.",
            "Cook in a pan until the eggs are set."
        ]
    },
    {
        name: "Tomato Pasta",
        ingredients: ["pasta", "tomatoes", "garlic", "cheese"],
        instructions: [
            "Boil the pasta according to the package.",
            "Cook chopped tomatoes and garlic in a pan.",
            "Mix the sauce with pasta and add cheese."
        ]
    },
    {
        name: "Potato Pancakes",
        ingredients: ["potatoes", "eggs", "flour", "salt"],
        instructions: [
            "Grate the potatoes.",
            "Mix with eggs, flour, and salt.",
            "Fry small portions until golden and cooked through."
        ]
    },
    {
        name: "Chicken Rice Bowl",
        ingredients: ["chicken", "rice", "onion", "garlic"],
        instructions: [
            "Cook the rice.",
            "Cook the chicken thoroughly in a pan.",
            "Add onion and garlic, then serve with rice."
        ]
    },
    {
        name: "Vegetable Salad",
        ingredients: ["tomatoes", "cucumber", "onion", "lettuce"],
        instructions: [
            "Wash all the vegetables.",
            "Chop them into small pieces.",
            "Mix together and add your favorite dressing."
        ]
    },
    {
        name: "Banana Pancakes",
        ingredients: ["banana", "eggs", "flour", "milk"],
        instructions: [
            "Mash the banana in a bowl.",
            "Mix with eggs, flour, and milk.",
            "Cook small pancakes in a lightly greased pan."
        ]
    },
    {
        name: "Garlic Cheese Toast",
        ingredients: ["bread", "cheese", "garlic", "butter"],
        instructions: [
            "Mix softened butter with crushed garlic.",
            "Spread the mixture on the bread.",
            "Add cheese and toast until melted."
        ]
    },
    {
        name: "Simple Tomato Eggs",
        ingredients: ["eggs", "tomatoes", "onion", "salt"],
        instructions: [
            "Chop the tomatoes and onion.",
            "Cook them in a pan until softened.",
            "Add the eggs and cook until fully set."
        ]
    }
];

const input = document.getElementById("ingredientsInput");
const button = document.getElementById("generateBtn");
const results = document.getElementById("recipeResults");

button.addEventListener("click", findRecipes);

function findRecipes() {
    const userIngredients = input.value
        .toLowerCase()
        .split(",")
        .map(item => item.trim())
        .filter(item => item !== "");

    results.innerHTML = "";

    if (userIngredients.length === 0) {
        results.textContent = "Please enter some ingredients.";
        return;
    }

    const matches = recipes
        .map(recipe => {
            const matched = recipe.ingredients.filter(ingredient =>
                userIngredients.includes(ingredient)
            );

            return {
                ...recipe,
                matched,
                score: matched.length
            };
        })
        .filter(recipe => recipe.score > 0)
        .sort((a, b) => b.score - a.score);

    if (matches.length === 0) {
        results.textContent =
            "No matching recipes found. Try eggs, tomatoes,potatoes,chees,milk,salad,bananas,onion,salt,bread,garlic";
        return;
    }

    matches.forEach(recipe => {
        const card = document.createElement("article");
        card.className = "recipe-card";

        const title = document.createElement("h3");
        title.textContent = recipe.name;

        const matched = document.createElement("p");
        matched.textContent =
            "Ingredients you have: " + recipe.matched.join(", ");

        const ingredients = document.createElement("p");
        ingredients.textContent =
            "Full ingredients: " + recipe.ingredients.join(", ");

        const heading = document.createElement("h4");
        heading.textContent = "Instructions";

        const list = document.createElement("ol");

        recipe.instructions.forEach(instruction => {
            const item = document.createElement("li");
            item.textContent = instruction;
            list.appendChild(item);
        });

        card.append(title, matched, ingredients, heading, list);
        results.appendChild(card);
    });
}
