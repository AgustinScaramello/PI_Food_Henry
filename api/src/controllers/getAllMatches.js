require("dotenv").config();
const axios = require("axios");
const { Recipe } = require("../db");
const { Op } = require("sequelize");
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const { API_KEY } = process.env;

const getAllMatches = async (req, res) => {
  try {
    const { name } = req.query;
    const nameMin = name.toLowerCase();

    const { data } = await axios(
      `${URL}?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
    );
    const { results } = data;
    const resultsApi = results.filter((recipe) => {
      return recipe.title.toLowerCase().includes(nameMin);
    });

    const resultsLocal = await Recipe.findAll({
      where: { title: { [Op.iLike]: `%${name}%` } },
    });

    const combinedData = [...resultsApi, ...resultsLocal];

    if (combinedData.length > 0) {
      return res.status(200).json(combinedData);
    } else {
      return res.status(404).json({
        message: "No existe receta que coincida con el nombre indicado",
      });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getAllMatches;
