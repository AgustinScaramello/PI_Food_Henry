import {
  FILTER_DIETS,
  FILTER_ORIGIN,
  GET_BY_NAME,
  GET_DIETS,
  GET_RECIPES,
  GET_RECIPE_DETAIL,
  ORDER_ALPHABETICALLY,
  ORDER_HEALTH_SCORE,
} from "../actions";

let initialState = {
  recipes: [],
  allRecipes: [],
  postRecipe: [],
  recipeDetail: {},
  diets: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        allRecipes: action.payload,
        recipes: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        recipes: action.payload,
      };
    case GET_RECIPE_DETAIL:
      return {
        ...state,
        recipeDetail: action.payload,
      };
    case GET_DIETS:
      return {
        ...state,
        diets: action.payload,
      };
    case FILTER_DIETS:
      const filteredDiets = state.allRecipes.filter((recipe) =>
        recipe.diets.includes(action.payload)
      );
      return {
        ...state,
        recipes: filteredDiets,
      };
    case FILTER_ORIGIN:
      const filteredOrigin = state.allRecipes.filter((recipe) =>
        action.payload === "API"
          ? recipe.created === false
          : recipe.created === true
      );
      return {
        ...state,
        recipes: filteredOrigin,
      };
    case ORDER_ALPHABETICALLY:
      return {
        ...state,
        recipes: state.recipes.sort((a, b) =>
          action.payload === "A"
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title)
        ),
      };
    case ORDER_HEALTH_SCORE:
      return {
        ...state,
        recipes: state.recipes.sort((a, b) =>
          action.payload === "A"
            ? a.healthScore - b.healthScore
            : b.healthScore - a.healthScore
        ),
      };
    default:
      return state;
  }
}

export default rootReducer;
