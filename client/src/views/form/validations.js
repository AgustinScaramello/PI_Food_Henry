export default function validation(recipeData) {
  const regexURL = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/\S*)?$/;

  const errors = {};

  if (!recipeData.title) errors.title = "No puede estar vacio";

  if (!recipeData.summary) errors.summary = "No puede estar vacio";

  if (recipeData.summary.length < 50)
    errors.summary = "No puede tener menos de 50 caracteres";

  if (
    parseFloat(recipeData.healthScore) === 0 ||
    parseFloat(recipeData.healthScore) > 100
  )
    errors.healthScore = "No puede ser menor que 1 y mayor que 100";

  if (recipeData.instructions.length < 50)
    errors.instructions = "No puede tener menos de 50 caracteres";

  if (!regexURL.test(recipeData.image)) errors.image = "Debe ser una URL";

  if (recipeData.diets.length === 0)
    errors.diets =
      'Debe seleccionar al menos una Diet, en caso de no tener selecciona "ninguna"';

  return errors;
}
