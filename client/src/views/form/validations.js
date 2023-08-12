export default function validation(recipeData) {
  const regexURL = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/\S*)?$/;
  const regexIncludesNumber = /\d/;

  const errors = {};

  if (!recipeData.title) errors.title = "No puede estar vacio";

  if (!recipeData.summary) errors.summary = "No puede estar vacio";

  if (recipeData.summary.length < 50)
    errors.summary = "No puede tener menos de 50 caracteres";

  if (
    !regexIncludesNumber.test(recipeData.healthScore) &&
    recipeData.healthScore > 0 &&
    recipeData.healthScore <= 100
  )
    errors.healthScore = "Debe ser un numero entre 1 y 100";

  if (recipeData.instructions.length < 50)
    errors.instructions = "No puede tener menos de 50 caracteres";

  if (!regexURL.test(recipeData.image)) errors.image = "Debe ser una URL";

  return errors;
}
