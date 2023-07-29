const { findRecipeByIdAPIyDB } = require("../controllers/recipesController");

const getDetail = async (req, res) => {
  const { id } = req.params;

  try {
    const findRecipe = await findRecipeByIdAPIyDB(id);

    if (findRecipe) {
      res.status(200).json(findRecipe);
    } else {
      res.status(404).json({ message: "La receta no existe" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getDetail;
