'use strict';

module.exports = (app) => {
    const {DataTypes} = app.Sequelize;

    const Quiz = app.model.define('Quiz', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        owner_id: {
            type: DataTypes.BIGINT
        },
        share_id: {
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID
        },
        name: {
            type: DataTypes.STRING
        },
        anonymously_answer: {
            defaultValue: false,
            type: DataTypes.BOOLEAN
        },
        finished_answer: {
            defaultValue: 0,
            type: DataTypes.INTEGER
        },
        available_at: {
            allowNull: true,
            type: DataTypes.DATE
        },
        description: {
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

    Quiz.associate = function () {
        app.model.Quiz.belongsTo(app.model.User, {as: 'owner', foreignKey: 'owner_id'})
        app.model.Quiz.hasMany(app.model.QuizItem, {as: 'items', foreignKey: 'quiz_id'})
    }

    return Quiz;
};
