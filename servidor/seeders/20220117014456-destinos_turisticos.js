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
      await queryInterface.bulkInsert('Destinos_Turisticos', [{
        name:'Destino'+i,
        description:'description'+i,
        ubication:"Ubication"+i,
        score:3.0+(i/5),
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
     await queryInterface.bulkDelete('Destinos_Turisticos', null, {});
  }
};
