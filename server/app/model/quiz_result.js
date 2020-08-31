'use strict';

module.exports = (app) => {
    const {DataTypes} = app.Sequelize;

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
        progress: {
            type: DataTypes.JSON
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
        },
        has_next: {
            type: DataTypes.VIRTUAL,
            get() {
                let progress = this.getDataValue('progress');

                return progress[0] < progress[1];
            },
            set() {
            }
        },
        next_index: {
            type: DataTypes.VIRTUAL,
            get() {
                let progress = this.getDataValue('progress');

                return progress[0] < progress[1] ? progress[0] + 1 : -1;
            },
            set() {
            }
        }
    }, {
        freezeTableName: true,
        tableName: 'quiz_result',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        underscored: true
    })

    QuizResult.prototype.associate = function () {
        app.model.QuizResult.belongsTo(app.model.Quiz, {as: 'quiz', foreignKey: 'quiz_id'})
    }

    return QuizResult;
};
