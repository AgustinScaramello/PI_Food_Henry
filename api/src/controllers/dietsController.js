require("dotenv").config();
const axios = require("axios");
const { Diet } = require("../db");
const { API_KEY, URL_ALL_RECIPES } = process.env;

//------------------------------------------------------------

const getDietsAPI = async () => {
  const { data } = await axios(
    `${URL_ALL_RECIPES}?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
  );
  const { results } = data;

  //Ingreso a las dietas de cada receta y lo guardo en un array
  const mapRecipe = results.map((receta) => {
    return receta.diets;
  });

  //Concateno todos esos array pequeños que estan dentro del array mas grande
  const allDiets = ["ninguna", "vegetarian"].concat(...mapRecipe);

  //Quito todos los elementos repetidos
  const allUniqueDiets = allDiets.filter(
    (diet, index, arr) => arr.indexOf(diet) === index
  );

  //Creo un array de objetos, que cada objeto contenga la propiedad name y el valor de cada una de las dieta
  const diets = allUniqueDiets.map((diets) => {
    return { name: diets };
  });

  return diets;
};

//------------------------------------------------------------

const loadDietsBD = async (diets) => {
  return await Diet.bulkCreate(diets);
};

//------------------------------------------------------------

module.exports = {
  getDietsAPI,
  loadDietsBD,
};
