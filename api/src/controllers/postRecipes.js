const { Recipe } = require("../db");

const postRecipes = async (req, res) => {
  const { title, image, summary, healthScore, instructions } = req.body;

  if (!title || !image || !summary || !healthScore || !instructions) {
    return res.status(401).json({ error: "Faltan datos para crear la receta" });
  }

  try {
    await Recipe.findOrCreate({
      where: { title, image, summary, healthScore, instructions },
    });
    res.status(200).json({ message: "Receta creada con exito" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postRecipes;
