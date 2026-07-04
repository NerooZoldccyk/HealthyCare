'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Doctor extends Model {

static associate(models) {

    Doctor.hasMany(models.Reservation, {
        foreignKey: "doctorId"
    });

}

    }

    Doctor.init({

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Nama dokter wajib diisi"
                }
            }
        },

        specialist: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Spesialis wajib diisi"
                }
            }
        },

        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },

        address: {
            type: DataTypes.TEXT,
            allowNull: false
        }

    }, {

        sequelize,
        modelName: "Doctor"

    });

    return Doctor;

};