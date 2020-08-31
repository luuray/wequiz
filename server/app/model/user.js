'use strict';

module.exports = (app) => {
    const {Model, DataTypes} = app.Sequelize;

    const User = app.model.define('User', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        account: {
            type: DataTypes.STRING(255),
        },
        password: {
            type: DataTypes.STRING(60)
        },
        last_sign: {
            allowNull: true,
            type: DataTypes.DATE
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

                delete values.password;

                return values;
            }
        }
    })

    return User;
};
