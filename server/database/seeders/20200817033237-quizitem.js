'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('quiz_item', [
            //quiz 1
            {
                quiz_id: 1,
                type: "choice",
                index: 1,
                question: "【单选题】测试1第1题共3题，第一题，三个选项",
                options: ['选项一', '选项2', '选项三']
            },
            {
                quiz_id: 1,
                type: "multi-choice",
                index: 2,
                question: "【多选题】测试1第2题共3题，第二题，四个选项",
                options: ['选项1-2-1', '选项1-2-2', '选项1-2-3', 'Option 1-2-4']
            },
            {
                quiz_id: 1,
                type: "text",
                index: 3,
                question: "【简答题】测试1第3题共3题，第三题，简答",
                options: null
            },
            //quiz 2
            {
                quiz_id: 2,
                type: "choice",
                index: 1,
                question: "【单选题】测试2第1题共5题，第一题，三个选项",
                options: ['选项一', '选项2', '选项三']
            },
            {
                quiz_id: 2,
                type: "multi-choice",
                index: 2,
                question: "【多选题】测试2第2题共5题，第二题，四个选项",
                options: ['选项2-2-1', '选项2-2-2', '选项2-2-3', 'Option 2-2-4']
            },
            {
                quiz_id: 2,
                type: "text",
                index: 3,
                question: "【简答题】测试2第3题共5题，第三题，简答",
                options: null
            },
            {
                quiz_id: 2,
                type: "multi-choice",
                index: 4,
                question: "【多选题】测试2第4题共5题，第二题，四个选项",
                options: ['选项2-4-1', '选项2-4-2', '选项2-4-3', 'Option 2-4-4']
            },
            {
                quiz_id: 2,
                type: "multi-choice",
                index: 5,
                question: "【多选题】测试2第5题共5题，第二题，四个选项",
                options: ['选项2-5-1', '选项2-5-2', '选项2-5-3', 'Option 2-5-4']
            },
            //quiz 3
            {
                quiz_id: 3,
                type: "choice",
                index: 1,
                question: "【单选题】测试3第1题共3题，第一题，三个选项",
                options: ['选项一', '选项2', '选项三']
            },
            {
                quiz_id: 3,
                type: "choice",
                index: 2,
                question: "【单选题】测试3第2题共3题，第二题，四个选项",
                options: ['选项3-2-1', '选项3-2-2', '选项3-2-3', 'Option 3-2-4']
            },
            {
                quiz_id: 3,
                type: "text",
                index: 3,
                question: "【简答题】测试2第3题共5题，第三题，简答",
                options: null
            }
        ], {}, {options: {type: new Sequelize.JSON()}})

        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
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
