export default function RecipeCard({ recipe, onDelete }) {
  return (
    <div className="card">
      <img src={recipe.image || "/images/eda.png"} alt={recipe.name} />
      <div className="card-body">
        <span className="badge">{recipe.category}</span>
        <h3>{recipe.name}</h3>
        <p>{recipe.description}</p>
        {onDelete && (
          <button className="btn-danger" onClick={() => onDelete(recipe.id)}>
            Remove
          </button>
        )}
      </div>
    </div>
  );
}
