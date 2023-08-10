import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_RECIPE_DETAIL = "GET_RECIPE_DETAIL";
export const GET_DIETS = "GET_DIETS";
export const FILTER_DIETS = "FILTER_DIETS";
export const FILTER_ORIGIN = "FILTER_ORIGIN";
export const ORDER_ALPHABETICALLY = "ORDER_ALPHABETICALLY";
export const ORDER_HEALTH_SCORE = "ORDER_HEALTH_SCORE";

export function getRecipes() {
  return async function (dispatch) {
    const response = await axios("http://localhost:3001/recipes?name");

    return dispatch({
      type: GET_RECIPES,
      payload: response.data,
    });
  };
}

export function getByName(name) {
  return async function (dispatch) {
    const response = await axios(`http://localhost:3001/recipes?name=${name}`);

    return dispatch({
      type: GET_BY_NAME,
      payload: response.data,
    });
  };
}

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

export const filterCardsByDiets = (diet) => {
  return {
    type: FILTER_DIETS,
    payload: diet,
  };
};

export const filterCardsByOrigin = (origin) => {
  return {
    type: FILTER_ORIGIN,
    payload: origin,
  };
};

export const sortCardsAlphabetically = (order) => {
  return {
    type: ORDER_ALPHABETICALLY,
    payload: order,
  };
};

export const sortCardsByHealthScore = (healthScore) => {
  return {
    type: ORDER_HEALTH_SCORE,
    payload: healthScore,
  };
};
