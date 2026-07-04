const express = require("express");
const router = express.Router();

const doctorController = require("../controllers/doctorController");

const { verifyToken } = require("../middlewares/authMiddleware");
const { isAdmin } = require("../middlewares/roleMiddleware");

// Semua user yang login boleh melihat data dokter
router.get("/", verifyToken, doctorController.getAllDoctors);
router.get("/:id", verifyToken, doctorController.getDoctorById);

// Hanya Admin yang boleh menambah, mengubah, dan menghapus dokter
router.post("/", verifyToken, isAdmin, doctorController.createDoctor);
router.put("/:id", verifyToken, isAdmin, doctorController.updateDoctor);
router.delete("/:id", verifyToken, isAdmin, doctorController.deleteDoctor);

module.exports = router;