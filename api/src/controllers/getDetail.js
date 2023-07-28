require("dotenv").config();
const axios = require("axios");
const { Recipe } = require("../db");
const URL = "https://api.spoonacular.com/recipes";
const { API_KEY } = process.env;

const getDetail = async (req, res) => {
  try {
    const { id } = req.params;

    const recipeLocal = await Recipe.findByPk(id);

    const { data } = await axios(`${URL}/${id}/information?apiKey=${API_KEY}`);
    const { title, image, summary, healthScore, instructions, diets } = data;
    const recipeApi = {
      title,
      image,
      summary,
      healthScore,
      instructions,
      diets,
    };

    if (recipeLocal !== null) {
      res.status(200).json(recipeLocal);
    }

    if (recipeApi !== null) {
      res.status(200).json(recipeApi);
    } else {
      res.status(404).json({ message: "La receta no existe" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getDetail;
