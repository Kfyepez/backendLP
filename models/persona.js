const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('personas', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    user: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'personas',
    timestamps: false
  });
};
