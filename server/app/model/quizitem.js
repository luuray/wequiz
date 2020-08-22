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
            allowNull: false,
            type: DataTypes.DATE
        },
        updated_at: {
            allowNull: false,
            type: DataTypes.DATE
        }
    }, {
        freezeTableName: true,
        underscored: true
    })

    QuizItem.associate = function () {
        QuizItem.belongsTo(app.model.Quiz, {as: 'quiz', foreignKey: 'quiz_id'})
    }

    return QuizItem;
};
