const { Doctor } = require("../models");

exports.getAllDoctors = async (req, res) => {

    try {

        const doctors = await Doctor.findAll({
            order: [["id", "ASC"]],
            raw: true
        });

        console.log("Jumlah dokter:", doctors.length);
        console.log(doctors);

        res.status(200).json({
            success: true,
            total: doctors.length,
            data: doctors
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.getDoctorById = async (req, res) => {

    try {

        const doctor = await Doctor.findByPk(req.params.id);

        if (!doctor) {

            return res.status(404).json({
                success: false,
                message: "Dokter tidak ditemukan"
            });

        }

        res.status(200).json({
            success: true,
            data: doctor
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.createDoctor = async (req, res) => {

    try {

        const doctor = await Doctor.create(req.body);

        res.status(201).json({
            success: true,
            message: "Dokter berhasil ditambahkan",
            data: doctor
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.updateDoctor = async (req, res) => {

    try {

        const doctor = await Doctor.findByPk(req.params.id);

        if (!doctor) {

            return res.status(404).json({
                success: false,
                message: "Dokter tidak ditemukan"
            });

        }

        await doctor.update(req.body);

        res.status(200).json({
            success: true,
            message: "Data dokter berhasil diupdate",
            data: doctor
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.deleteDoctor = async (req, res) => {

    try {

        const doctor = await Doctor.findByPk(req.params.id);

        if (!doctor) {

            return res.status(404).json({
                success: false,
                message: "Dokter tidak ditemukan"
            });

        }

        await doctor.destroy();

        res.status(200).json({
            success: true,
            message: "Dokter berhasil dihapus"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};