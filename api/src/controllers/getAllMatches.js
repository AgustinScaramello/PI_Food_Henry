require("dotenv").config();
const axios = require("axios");
const { Recipe } = require("../db");
const { Op } = require("sequelize");
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const { API_KEY } = process.env;

const getAllMatches = async (req, res) => {
  try {
    const { name } = req.query;

    const { data } = await axios(
      `${URL}?apiKey=${API_KEY}&addRecipeInformation=true`
    );
    const dataApi = data.results.filter((response) => {
      response.title.toLowerCase().includes(name.toLowerCase());
    });

    const dataLocal = await Recipe.findAll({
      where: { title: { [Op.iLike]: `%${name}%` } },
    });

    const combinedData = [...dataApi, ...dataLocal];

    if (combinedData.length > 0) {
      return res.status(200).json(combinedData);
    } else {
      return res
        .status(404)
        .json("No existe receta que coincida con el nombre indicado");
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getAllMatches;
