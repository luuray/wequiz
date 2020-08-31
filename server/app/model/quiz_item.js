'use strict';

module.exports = (app) => {
    const {DataTypes} = app.Sequelize;

    const QuizItem = app.model.define('QuizItem', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        quiz_id: {
            allowNull: false,
            type: DataTypes.BIGINT
        },
        index: {
            allowNull: false,
            type: DataTypes.TINYINT
        },
        type: {
            type: DataTypes.STRING
        },
        question: {
            type: DataTypes.STRING
        },
        options: {
            type: DataTypes.JSON
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        }
    }, {
        freezeTableName: true,
        tableName: 'quiz_item',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        underscored: true
    })

    QuizItem.prototype.associate = function () {
        app.model.QuizItem.belongsTo(app.model.Quiz, {as: 'quiz', foreignKey: 'quiz_id'})
    }

    return QuizItem;
};
