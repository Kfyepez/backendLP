'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ruta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ruta.init({
    path: DataTypes.STRING,
    id_destino: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ruta',
  });
  return ruta;
};