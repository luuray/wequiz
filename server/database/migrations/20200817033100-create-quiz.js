'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('quiz', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            owner_id: {
                type: Sequelize.BIGINT
            },
            share_id: {
                defaultValue: Sequelize.UUIDV4,
                type: Sequelize.UUID
            },
            name: {
                type: Sequelize.STRING
            },
            anonymously_answer: {
                defaultValue: false,
                type: Sequelize.BOOLEAN
            },
            finished_answer: {
                defaultValue: 0,
                type: Sequelize.INTEGER
            },
            available_at: {
                allowNull: true,
                type: Sequelize.DATE
            },
            description: {
                type: Sequelize.STRING
            },
            item_count: {
                type: Sequelize.INTEGER
            },
            created_at: {
                allowNull: false,
                defaultValue: new Date(),
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                defaultValue: new Date(),
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('quiz');
    }
};
