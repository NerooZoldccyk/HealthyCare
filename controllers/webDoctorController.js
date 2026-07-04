const { Doctor } = require("../models");
const { Op } = require("sequelize");

// ==============================
// Menampilkan Data Dokter
// ==============================
exports.index = async (req, res) => {

    try {

        const search = req.query.search || "";

        const doctors = await Doctor.findAll({

            where: {

                name: {

                    [Op.like]: `%${search}%`

                }

            },

            order: [["id", "ASC"]]

        });

        res.render("pages/doctor/index", {

            layout: "layouts/main",

            doctors,

            search

        });

    } catch (error) {

        res.send(error.message);

    }

};

// ==============================
// Form Tambah Dokter
// ==============================
exports.createForm = (req, res) => {

    res.render("pages/doctor/add", {

        layout: "layouts/main"

    });

};

// ==============================
// Simpan Dokter
// ==============================
exports.store = async (req, res) => {

    try {

        await Doctor.create({

            name: req.body.name,

            specialist: req.body.specialist,

            phone: req.body.phone,

            address: req.body.address

        });

        res.redirect("/doctors");

    } catch (error) {

        console.log(error);

        res.send(error.message);

    }

};

// ==============================
// Form Edit Dokter
// ==============================
exports.editForm = async (req, res) => {

    try {

        const doctor = await Doctor.findByPk(req.params.id);

        if (!doctor) {

            return res.redirect("/doctors");

        }

        res.render("pages/doctor/edit", {

            layout: "layouts/main",

            doctor

        });

    } catch (error) {

        res.send(error.message);

    }

};

// ==============================
// Update Dokter
// ==============================
exports.update = async (req, res) => {

    try {

        const doctor = await Doctor.findByPk(req.params.id);

        if (!doctor) {

            return res.redirect("/doctors");

        }

        await doctor.update({

            name: req.body.name,

            specialist: req.body.specialist,

            phone: req.body.phone,

            address: req.body.address

        });

        res.redirect("/doctors");

    } catch (error) {

        res.send(error.message);

    }

};

// ==============================
// Hapus Dokter
// ==============================
exports.destroy = async (req, res) => {

    try {

        const doctor = await Doctor.findByPk(req.params.id);

        if (!doctor) {

            return res.redirect("/doctors");

        }

        await doctor.destroy();

        res.redirect("/doctors");

    } catch (error) {

        res.send(error.message);

    }

};