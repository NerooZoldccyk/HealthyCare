'use strict';

module.exports = {

    async up(queryInterface, Sequelize) {

        await queryInterface.createTable("Reservations", {

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            patientId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "Patients",
                    key: "id"
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE"
            },

            doctorId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "Doctors",
                    key: "id"
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE"
            },

            reservationDate: {
                type: Sequelize.DATE,
                allowNull: false
            },

            status: {
                type: Sequelize.ENUM("Menunggu", "Disetujui", "Selesai", "Dibatalkan"),
                defaultValue: "Menunggu"
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },

            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }

        });

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.dropTable("Reservations");

    }

};