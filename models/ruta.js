const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rutas', {
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
    path: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'rutas',
    timestamps: false
  });
};
