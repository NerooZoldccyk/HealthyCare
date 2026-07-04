const { Patient } = require("../models");

// List Patient
exports.index = async (req, res) => {

    try {

        const patients = await Patient.findAll({
            order: [["id", "ASC"]]
        });

        res.render("pages/patient/index", {
            layout: "layouts/main",
            patients
        });

    } catch (error) {

        res.send(error.message);

    }

};

// Form Tambah
exports.createForm = (req, res) => {

    res.render("pages/patient/add", {
        layout: "layouts/main"
    });

};

// Simpan
exports.store = async (req, res) => {

    try {

        await Patient.create({

            name: req.body.name,
            gender: req.body.gender,
            age: req.body.age,
            phone: req.body.phone,
            address: req.body.address

        });

        res.redirect("/patients");

    } catch (error) {

        res.send(error.message);

    }

};

// Form Edit
exports.editForm = async (req, res) => {

    try {

        const patient = await Patient.findByPk(req.params.id);

        if (!patient) {

            return res.redirect("/patients");

        }

        res.render("pages/patient/edit", {

            layout: "layouts/main",

            patient

        });

    } catch (error) {

        res.send(error.message);

    }

};

// Update
exports.update = async (req, res) => {

    try {

        const patient = await Patient.findByPk(req.params.id);

        if (!patient) {

            return res.redirect("/patients");

        }

        await patient.update({

            name: req.body.name,
            gender: req.body.gender,
            age: req.body.age,
            phone: req.body.phone,
            address: req.body.address

        });

        res.redirect("/patients");

    } catch (error) {

        res.send(error.message);

    }

};

// Delete
exports.destroy = async (req, res) => {

    try {

        const patient = await Patient.findByPk(req.params.id);

        if (!patient) {

            return res.redirect("/patients");

        }

        await patient.destroy();

        res.redirect("/patients");

    } catch (error) {

        res.send(error.message);

    }

};