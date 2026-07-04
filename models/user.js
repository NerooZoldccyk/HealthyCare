'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class User extends Model {

        static associate(models) {

        }

    }

    User.init({

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Nama wajib diisi"
                }
            }
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: {
                    msg: "Email wajib diisi"
                },
                isEmail: {
                    msg: "Format email tidak valid"
                }
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Password wajib diisi"
                },
                len: {
                    args: [6, 100],
                    msg: "Password minimal 6 karakter"
                }
            }
        },

        role: {
            type: DataTypes.ENUM("admin", "user"),
            defaultValue: "user"
        }

    }, {

        sequelize,
        modelName: "User"

    });

    return User;

};