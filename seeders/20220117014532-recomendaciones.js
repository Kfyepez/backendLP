'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     for (let i = 0; i <10; i++) {
      await queryInterface.bulkInsert('Recomendaciones', [{
        recommendation:'Recomendacion'+i,
        id_destino:i,
          createdAt: new Date(),
          updatedAt: new Date()
      }], {});
   }
  }, 
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Recomendaciones', null, {});
  }
};
