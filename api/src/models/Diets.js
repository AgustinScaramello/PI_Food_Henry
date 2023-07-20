const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Diets", {
    id: {
      type: DataTypes.UUID,
      defaultValue: () => uuidv4(),
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
