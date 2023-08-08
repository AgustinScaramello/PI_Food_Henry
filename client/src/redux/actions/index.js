import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_RECIPE_DETAIL = "GET_RECIPE_DETAIL";

export function getRecipes() {
  return async function (dispatch) {
    const response = await axios("http://localhost:3001/recipes?name=");

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
