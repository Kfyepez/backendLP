const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('imagenes', {
    link: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'imagenes',
    timestamps: false
  });
};
