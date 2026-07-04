const express = require("express");
const router = express.Router();

const patientController = require("../controllers/patientController");
const { verifyToken } = require("../middlewares/authMiddleware");
const { isAdmin } = require("../middlewares/roleMiddleware");

router.get("/", verifyToken, patientController.getAllPatients);
router.get("/:id", verifyToken, patientController.getPatientById);

router.post("/", verifyToken, isAdmin, patientController.createPatient);
router.put("/:id", verifyToken, isAdmin, patientController.updatePatient);
router.delete("/:id", verifyToken, isAdmin, patientController.deletePatient);

module.exports = router;