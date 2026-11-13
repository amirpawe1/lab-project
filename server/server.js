const express = require("express");
const cors = require("cors");
const { recipes, validateRecipe } = require("./recipesData");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Проверка работоспособности сервера
app.get("/api/status", (req, res) => {
  res.json({ status: "ok" });
});

// Получить все рецепты
app.get("/api/recipes", (req, res) => {
  res.json(recipes);
});

// Добавить новый рецепт
app.post("/api/recipes", (req, res) => {
  const error = validateRecipe(req.body);
  if (error) {
    return res.status(400).json({ error });
  }

  const newRecipe = {
    id: Date.now(),
    name: req.body.name.trim(),
    ingredients: req.body.ingredients.trim(),
    instructions: req.body.instructions ? req.body.instructions.trim() : "Mix ingredients and cook until ready.",
  };

  recipes.push(newRecipe);
  res.status(201).json(newRecipe);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});