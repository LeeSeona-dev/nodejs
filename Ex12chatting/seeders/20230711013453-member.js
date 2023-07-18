'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
                                      //테이블명
      await queryInterface.bulkInsert('member', [{
       id: 'test',
       pw: '1234',
       nick : 'testnick'
     },{
       id: 'smart',
       pw : '1234',
       nick : 'smhrd'
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    //전체 초기화
     await queryInterface.bulkDelete('member', null, {});
     
  }
};
