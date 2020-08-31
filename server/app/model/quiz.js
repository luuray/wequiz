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
            type: DataTypes.UUID,
            validate: {
                isUUID: 4
            }
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
        item_count: {
            type: DataTypes.INTEGER
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        }
    }, {
        freezeTableName: true,
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        instanceMethods: {
            toJSON: function () {
                let values = Object.assign({}, this.get());

                delete values.id;
                delete values.owner_id;

                return values;
            }
        }
    })

    Quiz.prototype.associate = function () {
        app.model.Quiz.belongsTo(app.model.User, {as: 'owner', foreignKey: 'owner_id'})
        app.model.Quiz.hasMany(app.model.QuizItem, {as: 'items'})
    }

    return Quiz;
};
