'use strict';

module.exports = {

    async up(queryInterface, Sequelize) {

        await queryInterface.createTable("Doctors", {

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

            specialist: {
                type: Sequelize.STRING,
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

        await queryInterface.dropTable("Doctors");

    }

};