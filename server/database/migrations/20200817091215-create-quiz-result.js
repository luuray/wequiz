'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('quiz_result', {
            id: {
                allowNull: false,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4,
                type: Sequelize.UUID
            },
            quiz_id: {
                allowNull: false,
                type: Sequelize.BIGINT
            },
            owner_id: {
                allowNull: true,
                type: Sequelize.BIGINT
            },
            progress: {
                allowNull: false,
                type: Sequelize.JSON
            },
            result: {
                type: Sequelize.JSON
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
        await queryInterface.dropTable('quiz_result');
    }
};
