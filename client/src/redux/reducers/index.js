import { GET_BY_NAME, GET_RECIPES, GET_RECIPE_DETAIL } from "../actions";

let initialState = {
  allRecipes: [],
  postRecipe: [],
  recipeDetail: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        allRecipes: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        allRecipes: action.payload,
      };
    case GET_RECIPE_DETAIL:
      return {
        ...state,
        recipeDetail: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
