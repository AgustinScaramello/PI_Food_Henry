require("dotenv").config();
const axios = require("axios");
const { Diets } = require("../db");
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const { API_KEY } = process.env;

const getDiets = async (req, res) => {
  try {
    const { data } = await axios(
      `${URL}?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
    );
    const { results } = data;

    //Ingreso a las dietas de cada receta y lo guardo en un array
    const mapRecipe = results.map((receta) => {
      return receta.diets;
    });

    //Concateno todos esos array pequeños que estan dentro del array mas grande
    const allDiets = ["vegetarian"].concat(...mapRecipe);

    //Quito todos los elementos repetidos
    const allUniqueDiets = allDiets.filter(
      (diet, index, arr) => arr.indexOf(diet) === index
    );

    //Creo un array de objetos, que cada objeto contenga la propiedad name y el valor de cada una de las dieta
    const diets = allUniqueDiets.map((diets) => {
      return { name: diets };
    });

    //Creo la base de datos diets
    const loadDiets = await Diets.bulkCreate(diets);

    res.status(200).json(loadDiets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getDiets;
