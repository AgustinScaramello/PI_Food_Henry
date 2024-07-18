import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_RECIPE_DETAIL = "GET_RECIPE_DETAIL";
export const GET_DIETS = "GET_DIETS";
export const FILTER_ALL_RECIPES = "FILTER_ALL_RECIPES";
export const FILTER_DIETS = "FILTER_DIETS";
export const FILTER_ORIGIN = "FILTER_ORIGIN";
export const ORDER_ALPHABETICALLY = "ORDER_ALPHABETICALLY";
export const ORDER_HEALTH_SCORE = "ORDER_HEALTH_SCORE";
export const POST_RECIPE = "POST_RECIPE";
export const FILTER_NAME = "FILTER_NAME";

export function getRecipes() {
  return async function (dispatch) {
    const response = await axios("http://localhost:3001/recipes?name");

    return dispatch({
      type: GET_RECIPES,
      payload: response.data,
    });
  };
}

// export function getByName(name) {
//   return async function (dispatch) {
//     const response = await axios(`http://localhost:3001/recipes?name=${name}`);

//     return dispatch({
//       type: GET_BY_NAME,
//       payload: response.data,
//     });
//   };
// }

export function getRecipeDetail(id) {
  return async function (dispatch) {
    const response = await axios(`http://localhost:3001/recipes/${id}`);

    return dispatch({
      type: GET_RECIPE_DETAIL,
      payload: response.data,
    });
  };
}

export function getDiets() {
  return async function (dispatch) {
    const response = await axios("http://localhost:3001/diets");

    return dispatch({
      type: GET_DIETS,
      payload: response.data,
    });
  };
}

export function filterCardByName(searchString) {
  return {
    type: FILTER_NAME,
    payload: searchString,
  };
}

export function filterAllRecipes() {
  return {
    type: FILTER_ALL_RECIPES,
  };
}

export function filterCardsByDiets(diet) {
  return {
    type: FILTER_DIETS,
    payload: diet,
  };
}

export function filterCardsByOrigin(origin) {
  return {
    type: FILTER_ORIGIN,
    payload: origin,
  };
}

export function sortCardsAlphabetically(order) {
  return {
    type: ORDER_ALPHABETICALLY,
    payload: order,
  };
}

export function sortCardsByHealthScore(healthScore) {
  return {
    type: ORDER_HEALTH_SCORE,
    payload: healthScore,
  };
}

export function postRecipe(newRecipe) {
  return async function (dispatch) {
    const response = await axios.post(
      "http://localhost:3001/recipes",
      newRecipe
    );

    return dispatch({
      type: POST_RECIPE,
      payload: response.data,
    });
  };
}
