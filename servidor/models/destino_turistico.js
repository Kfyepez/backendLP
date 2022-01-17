'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class destino_turistico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  destino_turistico.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    ubication: DataTypes.STRING,
    score: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'destino_turistico',
  });
  return destino_turistico;
};