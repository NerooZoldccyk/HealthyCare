const { Doctor, Patient, Reservation } = require("../models");

exports.index = async (req, res) => {

    const totalDoctors = await Doctor.count();

    const totalPatients = await Patient.count();

    const totalReservations = await Reservation.count();

    res.render("pages/dashboard", {

        layout: "layouts/main",

        totalDoctors,

        totalPatients,

        totalReservations

    });

};