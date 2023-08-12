require("dotenv").config();
const axios = require("axios");
const { Op } = require("sequelize");
const { Recipe, Diet } = require("../db");
const { API_KEY, URL_RECIPE, URL_ALL_RECIPES } = process.env;

//------------------------------------------------------------

const findRecipeByNameDB = async (title) => {
  return await Recipe.findOne({ where: { title: title } });
};

//------------------------------------------------------------

const createRecipeDB = async (
  title,
  image,
  summary,
  healthScore,
  instructions,
  diets
) => {
  const newRecipe = await Recipe.create({
    title,
    image,
    summary,
    healthScore,
    instructions,
  });

  for (let i = 0; i < diets.length; i++) {
    const dietName = diets[i];
    const dietExists = await Diet.findOne({ where: { name: dietName } });

    if (dietExists) {
      await newRecipe.addDiet(dietExists);
    } else {
      const newDiet = await Diet.create({ name: dietName });
      await newRecipe.addDiet(newDiet);
    }
  }

  return newRecipe;
};

//------------------------------------------------------------

const findRecipeByIdAPIyDB = async (id) => {
  const source = isNaN(id) ? "db" : "api";

  if (source === "api") {
    const { data } = await axios(
      `${URL_RECIPE}/${id}/information?apiKey=${API_KEY}`
    );
    const {
      vegetarian,
      title,
      image,
      summary,
      healthScore,
      instructions,
      diets,
    } = data;

    const isVegetarian = vegetarian === true ? "vegetarian" : undefined;

    const recipeApi = {
      title,
      image,
      summary,
      healthScore,
      instructions,
      diets: [...diets, isVegetarian],
      created: false,
    };

    return recipeApi;
  } else {
    const recipeLocal = await Recipe.findByPk(id, {
      include: {
        model: Diet,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });

    return recipeLocal;
  }
};

//------------------------------------------------------------

const findRecipesByMatchAPIyDB = async (name) => {
  //Pongo en minusculas la query
  const nameMin = name.toLowerCase();

  const { data } = await axios(
    `${URL_ALL_RECIPES}?apiKey=${API_KEY}&number=40&addRecipeInformation=true`
  );
  const { results } = data;

  //Filtro las recetas de la api que en su titulo(tambien lo pongo en minusculas) contengan la query
  const recipesApi = results.filter((recipe) => {
    return recipe.title.toLowerCase().includes(nameMin);
  });

  const resultsApi = recipesApi.map((recipe) => {
    const isVegetarian = recipe.vegetarian === true ? "vegetarian" : undefined;
    return {
      ...recipe,
      diets: [...recipe.diets, isVegetarian],
      created: false,
    };
  });

  //Filtro las recetas locales que en su titulo(con iLike no importa si esta en may o min) contengan la query
  const resultsLocal = await Recipe.findAll({
    where: { title: { [Op.iLike]: `%${name}%` } },
    include: {
      model: Diet,
      attributes: ["name"],
      through: { attributes: [] },
    },
  });

  const combinedData = [...resultsLocal, ...resultsApi];

  return combinedData;
};

//------------------------------------------------------------

module.exports = {
  findRecipeByNameDB,
  createRecipeDB,
  findRecipeByIdAPIyDB,
  findRecipesByMatchAPIyDB,
};
