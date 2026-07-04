'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Reservation extends Model {

        static associate(models) {

            Reservation.belongsTo(models.Patient, {
                foreignKey: "patientId"
            });

            Reservation.belongsTo(models.Doctor, {
                foreignKey: "doctorId"
            });

        }

    }

    Reservation.init({

        patientId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        doctorId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        reservationDate: {
            type: DataTypes.DATE,
            allowNull: false
        },

        status: {
            type: DataTypes.ENUM("Menunggu", "Disetujui", "Selesai", "Dibatalkan"),
            defaultValue: "Menunggu"
        }

    }, {

        sequelize,
        modelName: "Reservation"

    });

    return Reservation;

};