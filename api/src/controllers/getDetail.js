require("dotenv").config();
const axios = require("axios");
const { Recipe } = require("../db");
const URL = "https://api.spoonacular.com/recipes";
const { API_KEY } = process.env;

const getDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(
      `${URL}/${id}/information?apiKey=${API_KEY}&addRecipeInformation=true`
    );
    const { title, image, summary, healthScore, instructions, diets } = data;
    const recipeApi = {
      title,
      image,
      summary,
      healthScore,
      instructions,
      diets,
    };

    const recipeLocal = await Recipe.findByPk(id);

    const combinedData = {
      recipeApi,
      recipeLocal,
    };

    if (combinedData) {
      return res.status(200).json(combinedData);
    } else {
      return res.status(404).json("La receta no existe");
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getDetail;
