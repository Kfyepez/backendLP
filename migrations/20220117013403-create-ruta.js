'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rutas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_destino: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'destinos_turisticos',
          key: 'id'
        }
      },
      path: {
        type: Sequelize.STRING,
        allowNull: true
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('rutas');
  }
};