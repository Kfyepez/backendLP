'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    id_forest: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'destinos_turisticos',
            key: 'id'
        }
    },
    id_imagen: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'imagenes',
            key: 'id'
        }
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true,
    },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('posts');
  }
};