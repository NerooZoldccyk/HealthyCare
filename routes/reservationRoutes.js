const express = require("express");
const router = express.Router();

const reservationController = require("../controllers/reservationController");
const { verifyToken } = require("../middlewares/authMiddleware");
const { isAdmin } = require("../middlewares/roleMiddleware");

router.get("/", verifyToken, reservationController.getAllReservations);

router.post("/", verifyToken, isAdmin, reservationController.createReservation);

router.put("/:id", verifyToken, isAdmin, reservationController.updateReservation);

router.delete("/:id", verifyToken, isAdmin, reservationController.deleteReservation);

module.exports = router;