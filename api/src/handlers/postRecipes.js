const {
  findRecipeByNameDB,
  createRecipeDB,
} = require("../controllers/recipesController");

const postRecipes = async (req, res) => {
  const { title, image, summary, healthScore, instructions, diets } = req.body;

  try {
    if (
      !title ||
      !image ||
      !summary ||
      !healthScore ||
      !instructions ||
      !diets
    ) {
      return res
        .status(401)
        .json({ error: "Faltan datos para crear la receta" });
    }

    const recipeExists = await findRecipeByNameDB(title);

    if (recipeExists) {
      res.status(200).json({ message: `La receta de ${title} ya existe` });
    } else {
      const createRecipe = await createRecipeDB(
        title,
        image,
        summary,
        healthScore,
        instructions,
        diets
      );
      res.status(201).json(createRecipe);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postRecipes;
