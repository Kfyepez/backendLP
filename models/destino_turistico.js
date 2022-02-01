const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('destinos_turisticos', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ubication: {
      type: DataTypes.STRING,
      allowNull: true
    },
    score: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    
  }, {
    sequelize,
    tableName: 'destinos_turisticos',
    timestamps: false
  });
};
