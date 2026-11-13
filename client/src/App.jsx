import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecipeList from "./components/RecipeList";
import RegisterForm from "./components/RegisterForm";
import "./App.css";

export default function App() {
  const [activePage, setActivePage] = useState("main");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/recipes")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load recipes from server");
        }
        return res.json();
      })
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleAddRecipe = async (newRecipeData) => {
    const res = await fetch("http://localhost:3000/api/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRecipeData),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || "Failed to add recipe");
    }
    setRecipes((prev) => [...prev, data]);
  };

  return (
    <div className="wrapper">
      <Header activePage={activePage} setActivePage={setActivePage} />

      {activePage === "main" && (
        <main className="glav">
          <div className="content">
            <h1>Food waste reduction</h1>
            <p className="subtit">Help households use food before it spoils</p>
            <div className="grid">
              <div className="card">
                <div className="icon">🍎</div>
                <h3>Track ingredients</h3>
                <p>Keep track of what in your fridge and get reminders before products expire.</p>
              </div>
              <div className="card">
                <div className="icon">🥗</div>
                <h3>Smart recipes</h3>
                <p>Discover quick and easy recipes based on the ingredients you already have at fridge.</p>
              </div>
              <div className="card">
                <div className="icon">💡</div>
                <h3>Useful tips</h3>
                <p>Learn best practices for proper food storage to extend fresshness and save money.</p>
              </div>
            </div>
          </div>
        </main>
      )}

      {activePage === "recipes" && (
        <RecipeList
          recipes={recipes}
          loading={loading}
          error={error}
          onAddRecipe={handleAddRecipe}
        />
      )}

      {activePage === "reg" && <RegisterForm />}

      <Footer setActivePage={setActivePage} />
    </div>
  );
}