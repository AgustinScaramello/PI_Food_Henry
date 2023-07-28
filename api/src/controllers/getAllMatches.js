require("dotenv").config();
const axios = require("axios");
const { Recipe } = require("../db");
const { Op } = require("sequelize");
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const { API_KEY } = process.env;

const getAllMatches = async (req, res) => {
  try {
    const { name } = req.query;

    //Pongo en minusculas la query
    const nameMin = name.toLowerCase();

    const { data } = await axios(`${URL}?apiKey=${API_KEY}&number=40`);
    const { results } = data;

    //Filtro las recetas de la api que en su titulo(tambien lo pongo en minusculas) contengan la query
    const resultsApi = results.filter((recipe) => {
      return recipe.title.toLowerCase().includes(nameMin);
    });

    //Filtro las recetas locales que en su titulo(con iLike no importa si esta en may o min) contengan la query
    const resultsLocal = await Recipe.findAll({
      where: { title: { [Op.iLike]: `%${name}%` } },
    });

    const combinedData = [...resultsApi, ...resultsLocal];

    if (combinedData.length > 0) {
      res.status(200).json(combinedData);
    } else {
      res.status(404).json({
        message: "No existe receta que coincida con el nombre indicado",
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllMatches;
