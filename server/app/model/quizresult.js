'use strict';

module.exports = (app) => {
    const {DataTypes} = app.Sequelize

    const QuizResult = app.model.define('QuizResult', {
        id: {
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID
        },
        quiz_id: {
            allowNull: false,
            type: DataTypes.BIGINT
        },
        owner_id: {
            allowNull: true,
            type: DataTypes.BIGINT
        },
        result: {
            type: DataTypes.STRING
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
    QuizResult.associate = function () {
        QuizResult.belongsTo(app.model.Quiz, {as: 'quiz', foreignKey: 'quiz_id'})
    }
    return QuizResult;
};
