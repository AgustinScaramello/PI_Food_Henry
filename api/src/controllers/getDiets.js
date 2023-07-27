require("dotenv").config();
const axios = require("axios");
const { Diets } = require("../db");
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const { API_KEY } = process.env;

const getDiets = async (req, res) => {
  const classicDiets = [
    { name: "vegetarian" },
    { name: "vegan" },
    { name: "glutenFree" },
  ];

  try {
    const { data } = await axios(
      `${URL}?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
    );
    const { results } = data;

    const arrDiets = results.map((receta) =>
      receta.diets.map((diet) => {
        return { name: diet };
      })
    );

    const allDiets = [...classicDiets, ...new Set(arrDiets)];

    const loadDiets = await Diets.bulkCreate(allDiets);

    return res.status(200).json(loadDiets);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getDiets;
