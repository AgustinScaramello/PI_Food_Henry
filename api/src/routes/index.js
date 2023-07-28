const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getAllMatches = require("../controllers/getAllMatches");
const getDetail = require("../controllers/getDetail");
const getDiets = require("../controllers/getDiets");
const postRecipes = require("../controllers/postRecipes");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/recipes/:id", getDetail);
router.get("/recipes", getAllMatches);
router.get("/diets", getDiets);
router.post("/recipes", postRecipes);

module.exports = router;
