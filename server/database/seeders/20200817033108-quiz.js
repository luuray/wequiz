'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('quiz', [
            {
                owner_id: 1,
                name: '测试1-允许匿名',
                anonymously_answer: true,
                description: "测试1，允许匿名，共3题",
                item_count: 3
            },
            {
                owner_id: 1,
                name: '测试2-允许匿名',
                anonymously_answer: true,
                description: "测试2，允许匿名，共5题",
                item_count: 5
            },
            {
                owner_id: 1,
                name: '测试3-不可匿名',
                anonymously_answer: true,
                description: "测试3，不可匿名，共3题",
                item_count: 3
            }
        ])
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
