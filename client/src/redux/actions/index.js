import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";

export function getRecipes() {
  return async function (dispatch) {
    const response = await axios("http://localhost:3001/recipes?name=");

    return dispatch({
      type: GET_RECIPES,
      payload: response.data,
    });
  };
}
