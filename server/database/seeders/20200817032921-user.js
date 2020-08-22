'use strict';
const bcrypt = require('bcrypt');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('user', [
            {
                account: 'user1@test.com',
                password: bcrypt.hashSync('password', 5)
            },
            {
                account: 'user2@test.com',
                password: bcrypt.hashSync('password', 5)
            },
            {
                account: 'user3@test.com',
                password: bcrypt.hashSync('password', 5)
            }
        ])
    },

    down: async (queryInterface, Sequelize) => {
    }
};
