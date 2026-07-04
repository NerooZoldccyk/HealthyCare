const { Reservation, Patient, Doctor } = require("../models");

// List
exports.index = async (req, res) => {

    const reservations = await Reservation.findAll({

        include: [

            Patient,

            Doctor

        ],

        order: [["id","ASC"]]

    });

    res.render("pages/reservation/index",{

        layout:"layouts/main",

        reservations

    });

};

// Form
exports.createForm = async (req,res)=>{

    const patients=await Patient.findAll();

    const doctors=await Doctor.findAll();

    res.render("pages/reservation/add",{

        layout:"layouts/main",

        patients,

        doctors

    });

};

// Simpan
exports.store=async(req,res)=>{

    await Reservation.create({

        patientId:req.body.patientId,

        doctorId:req.body.doctorId,

        reservationDate:req.body.reservationDate,

        status:req.body.status

    });

    res.redirect("/reservations");

};

// Edit Form
exports.editForm=async(req,res)=>{

    const reservation=await Reservation.findByPk(req.params.id);

    const patients=await Patient.findAll();

    const doctors=await Doctor.findAll();

    res.render("pages/reservation/edit",{

        layout:"layouts/main",

        reservation,

        patients,

        doctors

    });

};

// Update
exports.update=async(req,res)=>{

    const reservation=await Reservation.findByPk(req.params.id);

    await reservation.update({

        patientId:req.body.patientId,

        doctorId:req.body.doctorId,

        reservationDate:req.body.reservationDate,

        status:req.body.status

    });

    res.redirect("/reservations");

};

// Delete
exports.destroy=async(req,res)=>{

    const reservation=await Reservation.findByPk(req.params.id);

    await reservation.destroy();

    res.redirect("/reservations");

};