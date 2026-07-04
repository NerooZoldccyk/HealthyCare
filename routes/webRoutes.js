const express = require("express");
const router = express.Router();

const dashboardController = require("../controllers/dashboardController");
const webDoctorController = require("../controllers/webDoctorController");
const webPatientController = require("../controllers/webPatientController");
const webReservationController = require("../controllers/webReservationController");
const webAuthController = require("../controllers/webAuthController");

const { isLogin, isAdmin } = require("../middlewares/webAuth");


// =======================
// LOGIN
// =======================

router.get("/login", webAuthController.loginForm);

router.post("/login", webAuthController.login);

router.get("/register", webAuthController.registerForm);

router.post("/register", webAuthController.register);

router.get("/logout", webAuthController.logout);


// =======================
// SEMUA HARUS LOGIN
// =======================

router.use(isLogin);


// =======================
// DASHBOARD
// =======================

router.get("/", dashboardController.index);


// =======================
// DOCTOR
// =======================

// Semua user boleh melihat
router.get("/doctors", webDoctorController.index);

// Hanya admin
router.get("/doctors/add", isAdmin, webDoctorController.createForm);

router.post("/doctors/add", isAdmin, webDoctorController.store);

router.get("/doctors/edit/:id", isAdmin, webDoctorController.editForm);

router.post("/doctors/edit/:id", isAdmin, webDoctorController.update);

router.get("/doctors/delete/:id", isAdmin, webDoctorController.destroy);


// =======================
// PATIENT
// =======================

// Semua user boleh melihat
router.get("/patients", webPatientController.index);

// Hanya admin
router.get("/patients/add", isAdmin, webPatientController.createForm);

router.post("/patients/add", isAdmin, webPatientController.store);

router.get("/patients/edit/:id", isAdmin, webPatientController.editForm);

router.post("/patients/edit/:id", isAdmin, webPatientController.update);

router.get("/patients/delete/:id", isAdmin, webPatientController.destroy);


// =======================
// RESERVATION
// =======================

// Semua user boleh melihat
router.get("/reservations", webReservationController.index);

// Hanya admin
router.get("/reservations/add", isAdmin, webReservationController.createForm);

router.post("/reservations/add", isAdmin, webReservationController.store);

router.get("/reservations/edit/:id", isAdmin, webReservationController.editForm);

router.post("/reservations/edit/:id", isAdmin, webReservationController.update);

router.get("/reservations/delete/:id", isAdmin, webReservationController.destroy);


module.exports = router;