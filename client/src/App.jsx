import { useState } from "react";
import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import RegisterForm from "./components/RegisterForm";
import "./App.css";

const initialRecipes = [
  {
    id: 1,
    name: "Vegetable Stir-Fry",
    category: "Quick Meal",
    description: "Use leftover carrots, broccoli, and bell peppers in 15 minutes.",
    image: "/images/eda.png",
  },
  {
    id: 2,
    name: "Herb & Egg Frittata",
    category: "Breakfast",
    description: "Great way to finish remaining eggs, greens, and cheese.",
    image: "/images/egg.png",
  },
  {
    id: 3,
    name: "Fresh Fruit Smoothie",
    category: "Drink",
    description: "Blend ripe bananas and berries before they spoil.",
    image: "/images/edaa.png",
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("recipes");
  const [recipes, setRecipes] = useState(initialRecipes);

  const handleDelete = (id) => {
    setRecipes(recipes.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="container">
        {activeTab === "recipes" && (
          <RecipeList recipes={recipes} onDelete={handleDelete} />
        )}

        {activeTab === "tips" && (
          <section className="section">
            <h2>Smart Storage Tips</h2>
            <div className="grid">
              <div className="card">
                <img src="/images/ice.png" alt="Freezer" />
                <div className="card-body">
                  <h3>Freeze Bread & Greens</h3>
                  <p>Slice bread before freezing so you can toast single pieces.</p>
                </div>
              </div>
              <div className="card">
                <img src="/images/calendar.png" alt="Calendar" />
                <div className="card-body">
                  <h3>FIFO Rule</h3>
                  <p>First In, First Out — place older products at the front of the fridge.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === "register" && <RegisterForm />}
      </main>
    </div>
  );
}