'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Patient extends Model {

static associate(models) {

    Patient.hasMany(models.Reservation, {
        foreignKey: "patientId"
    });

}

    }

    Patient.init({

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Nama pasien wajib diisi"
                }
            }
        },

        gender: {
            type: DataTypes.ENUM("Laki-laki", "Perempuan"),
            allowNull: false
        },

        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0
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
        modelName: "Patient"

    });

    return Patient;

};