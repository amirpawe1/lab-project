import { useState } from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeList({ recipes, onDelete }) {
  const [search, setSearch] = useState("");

  const filtered = recipes.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="section">
      <div className="section-header">
        <h2>Zero-Waste Recipes</h2>
        <input
          type="text"
          placeholder="Search recipe by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="empty">No recipes found.</p>
      ) : (
        <div className="grid">
          {filtered.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} onDelete={onDelete} />
          ))}
        </div>
      )}
    </section>
  );
}
