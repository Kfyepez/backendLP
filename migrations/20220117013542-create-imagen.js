'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('imagenes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      link: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('imagenes');
  }
};