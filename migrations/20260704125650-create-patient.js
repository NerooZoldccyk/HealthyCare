'use strict';

module.exports = {

    async up(queryInterface, Sequelize) {

        await queryInterface.createTable("Patients", {

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            name: {
                type: Sequelize.STRING,
                allowNull: false
            },

            gender: {
                type: Sequelize.ENUM("Laki-laki", "Perempuan"),
                allowNull: false
            },

            age: {
                type: Sequelize.INTEGER,
                allowNull: false
            },

            phone: {
                type: Sequelize.STRING,
                allowNull: false
            },

            address: {
                type: Sequelize.TEXT,
                allowNull: false
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

        await queryInterface.dropTable("Patients");

    }

};