const { Reservation, Patient, Doctor } = require("../models");

exports.getAllReservations = async (req, res) => {
    try {

        const reservations = await Reservation.findAll({
            include: [
                {
                    model: Patient,
                    attributes: ["id", "name", "phone"]
                },
                {
                    model: Doctor,
                    attributes: ["id", "name", "specialist"]
                }
            ],
            order: [["id", "ASC"]]
        });

        res.status(200).json({
            success: true,
            total: reservations.length,
            data: reservations
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

exports.createReservation = async (req, res) => {
    try {

        const reservation = await Reservation.create(req.body);

        res.status(201).json({
            success: true,
            message: "Reservasi berhasil dibuat",
            data: reservation
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

exports.updateReservation = async (req, res) => {
    try {

        const reservation = await Reservation.findByPk(req.params.id);

        if (!reservation) {
            return res.status(404).json({
                success: false,
                message: "Reservasi tidak ditemukan"
            });
        }

        await reservation.update(req.body);

        res.status(200).json({
            success: true,
            message: "Reservasi berhasil diperbarui",
            data: reservation
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

exports.deleteReservation = async (req, res) => {
    try {

        const reservation = await Reservation.findByPk(req.params.id);

        if (!reservation) {
            return res.status(404).json({
                success: false,
                message: "Reservasi tidak ditemukan"
            });
        }

        await reservation.destroy();

        res.status(200).json({
            success: true,
            message: "Reservasi berhasil dihapus"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};