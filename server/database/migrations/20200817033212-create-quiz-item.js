'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('quiz_item', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            quiz_id: {
                allowNull: false,
                type: Sequelize.BIGINT
            },
            index: {
                allowNull: false,
                type: Sequelize.TINYINT
            },
            type: {
                type: Sequelize.STRING
            },
            question: {
                type: Sequelize.STRING
            },
            options: {
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
        await queryInterface.dropTable('quiz_item');
    }
};
