const { getDietsAPI, loadDietsBD } = require("../controllers/dietsController");

const getDiets = async (req, res) => {
  try {
    const diets = await getDietsAPI();
    const loadDiets = await loadDietsBD(diets);

    res.status(200).json(loadDiets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getDiets;
