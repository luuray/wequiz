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
            allowNull: false,
            type: DataTypes.DATE
        },
        updated_at: {
            allowNull: false,
            type: DataTypes.DATE
        }
    }, {
        freezeTableName: true,
        underscored: true,
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
