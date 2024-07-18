import {
  FILTER_NAME,
  FILTER_ALL_RECIPES,
  FILTER_DIETS,
  FILTER_ORIGIN,
  GET_BY_NAME,
  GET_DIETS,
  GET_RECIPES,
  GET_RECIPE_DETAIL,
  ORDER_ALPHABETICALLY,
  ORDER_HEALTH_SCORE,
  POST_RECIPE,
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
    case FILTER_NAME:
      const filteredName = state.allRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        recipes: filteredName,
      };
    case FILTER_ALL_RECIPES:
      return {
        ...state,
        recipes: state.allRecipes,
      };
    case FILTER_DIETS:
      const filteredDiets = state.allRecipes.filter((recipe) => {
        if (recipe.Diets) {
          return recipe.Diets.some((diet) => diet.name === action.payload);
        } else {
          return recipe.diets?.includes(action.payload);
        }
      });
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
    case POST_RECIPE:
      return {
        ...state,
        postRecipe: [...state.postRecipe, action.payload],
      };
    default:
      return state;
  }
}

export default rootReducer;
