'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('user', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            account: {
                unique: true,
                type: Sequelize.STRING(255),
            },
            password: {
                type: Sequelize.STRING(60)
            },
            last_sign: {
                allowNull: true,
                type: Sequelize.DATE
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
        await queryInterface.dropTable('user');
    }
};
