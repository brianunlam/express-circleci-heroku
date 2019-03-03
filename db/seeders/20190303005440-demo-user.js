'use strict';

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [
    {
      username: 'Brian'
    }
  ]),
  down: queryInterface => queryInterface.bulkDelete('Users', null, {})
};
