const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Recipe",
    {
      id: {
        type: DataTypes.INTEGER,
        defaultValue: () => uuidv4().replace(/\D/g, "").substring(0, 8),
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      //Resumen del plato
      summary: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      //Nivel de comida saludable
      healthScore: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      //Paso a paso
      instructions: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
