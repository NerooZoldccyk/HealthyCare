const { Patient } = require("../models");

exports.getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.findAll({
            order: [["id", "ASC"]]
        });

        res.status(200).json({
            success: true,
            total: patients.length,
            data: patients
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.getPatientById = async (req, res) => {
    try {

        const patient = await Patient.findByPk(req.params.id);

        if (!patient) {
            return res.status(404).json({
                success: false,
                message: "Pasien tidak ditemukan"
            });
        }

        res.status(200).json({
            success: true,
            data: patient
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.createPatient = async (req, res) => {
    try {

        const patient = await Patient.create(req.body);

        res.status(201).json({
            success: true,
            message: "Pasien berhasil ditambahkan",
            data: patient
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.updatePatient = async (req, res) => {
    try {

        const patient = await Patient.findByPk(req.params.id);

        if (!patient) {
            return res.status(404).json({
                success: false,
                message: "Pasien tidak ditemukan"
            });
        }

        await patient.update(req.body);

        res.status(200).json({
            success: true,
            message: "Data pasien berhasil diupdate",
            data: patient
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.deletePatient = async (req, res) => {
    try {

        const patient = await Patient.findByPk(req.params.id);

        if (!patient) {
            return res.status(404).json({
                success: false,
                message: "Pasien tidak ditemukan"
            });
        }

        await patient.destroy();

        res.status(200).json({
            success: true,
            message: "Pasien berhasil dihapus"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};