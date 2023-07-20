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
        type: DataTypes.UUID,
        defaultValue: () => uuidv4(),
        allowNull: false,
        primaryKey: true,
      },
      name: {
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
      health_score: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      //Paso a paso
      step_by_step: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
