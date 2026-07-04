const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.post("/register", authController.register);
router.post("/login", authController.login);

const { verifyToken } = require("../middlewares/authMiddleware");

router.get("/profile", verifyToken, (req, res) => {

    res.json({
        success: true,
        message: "Token Valid",
        user: req.user
    });

});

module.exports = router;