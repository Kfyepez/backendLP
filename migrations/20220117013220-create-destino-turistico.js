'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('destinos_turisticos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      ubication: {
        type: Sequelize.STRING
      },
      score: {
        type: Sequelize.DOUBLE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('destinos_turisticos');
  }
};