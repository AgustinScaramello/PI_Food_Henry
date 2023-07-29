const {
  findRecipesByMatchAPIyDB,
} = require("../controllers/recipesController");

const getAllMatches = async (req, res) => {
  const { name } = req.query;
  try {
    const matches = await findRecipesByMatchAPIyDB(name);

    if (matches.length > 0) {
      res.status(200).json(matches);
    } else {
      res.status(404).json({
        message: "No existe receta que coincida con el nombre indicado",
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllMatches;
