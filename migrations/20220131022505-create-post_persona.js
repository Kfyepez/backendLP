'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('posts_personas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    id_post: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'posts',
            key: 'id'
        }
    },
    id_persona: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'personas',
            key: 'id'
        }
    },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('posts_personas');
  }
};