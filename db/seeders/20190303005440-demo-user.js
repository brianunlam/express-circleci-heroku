'use strict';

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [
    {
      username: 'Brian',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]),
  down: queryInterface => queryInterface.bulkDelete('Users', null, {})
};
