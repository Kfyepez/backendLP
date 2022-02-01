const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recomendaciones_hoteles', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
  },
    id_destino: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'destinos_turisticos',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    precio: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'recomendaciones_hoteles',
    timestamps: false
  });
};

