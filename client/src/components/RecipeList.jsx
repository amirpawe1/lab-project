import { useState } from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeList({ recipes, loading, error, onAddRecipe }) {
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [newName, setNewName] = useState("");
  const [newIngredients, setNewIngredients] = useState("");
  const [newInstructions, setNewInstructions] = useState("");
  const [formError, setFormError] = useState("");

  const filteredRecipes = recipes.filter((recipe) => {
    const text = `${recipe.name} ${recipe.ingredients}`.toLowerCase();
    return text.includes(searchTerm.toLowerCase());
  });

  const handleGenerate = () => {
    setSearchTerm(query.trim());
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setFormError("");
    try {
      await onAddRecipe({
        name: newName,
        ingredients: newIngredients,
        instructions: newInstructions,
      });
      setNewName("");
      setNewIngredients("");
      setNewInstructions("");
    } catch (err) {
      setFormError(err.message);
    }
  };

  return (
    <section className="recipe-generator">
      <h2>Find Recipes From Your Ingredients</h2>
      <p>Enter the ingredients you have at home.</p>
      <input
        type="text"
        id="ingredientsInput"
        placeholder="e.g. eggs, potatoes, cheese"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />{" "}
      <button id="generateBtn" onClick={handleGenerate}>
        Generate Recipes
      </button>

      <div id="recipeResults">
        {loading && <p>Loading recipes from server...</p>}
        {error && <p style={{ color: "#c62828" }}>Error: {error}</p>}
        {!loading && !error && filteredRecipes.length === 0 && (
          <p>No matching recipes found.</p>
        )}
        {!loading &&
          !error &&
          filteredRecipes.map((item) => (
            <RecipeCard key={item.id} recipe={item} />
          ))}
      </div>

      <form onSubmit={handleCreate} className="recipe-card" style={{ marginTop: "30px", textAlign: "left" }}>
        <h3>Add New Recipe</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <input
            type="text"
            placeholder="Recipe title (e.g. Tomato Soup)"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
          />
          <input
            type="text"
            placeholder="Ingredients (e.g. tomatoes, onion, garlic)"
            value={newIngredients}
            onChange={(e) => setNewIngredients(e.target.value)}
            style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
          />
          <input
            type="text"
            placeholder="Cooking instructions"
            value={newInstructions}
            onChange={(e) => setNewInstructions(e.target.value)}
            style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
          />
          <button type="submit" id="generateBtn" style={{ width: "fit-content" }}>
            Save Recipe to Server
          </button>
          {formError && <small style={{ color: "#c62828" }}>{formError}</small>}
        </div>
      </form>
    </section>
  );
}
