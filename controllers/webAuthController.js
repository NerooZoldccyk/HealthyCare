const bcrypt = require("bcrypt");
const { User } = require("../models");

// =========================
// HALAMAN LOGIN
// =========================
exports.loginForm = (req, res) => {

    res.render("auth/login", {

        layout: false,

        error: null,

        success: req.query.success

    });

};

// =========================
// PROSES LOGIN
// =========================
exports.login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({
            where: { email }
        });

        if (!user) {

            return res.render("auth/login", {

                layout: false,

                error: "Email tidak ditemukan",

                success: null

            });

        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {

            return res.render("auth/login", {

                layout: false,

                error: "Password salah",

                success: null

            });

        }

        req.session.user = {

            id: user.id,

            name: user.name,

            email: user.email,

            role: user.role

        };

        res.redirect("/");

    } catch (error) {

        console.log(error);

        res.render("auth/login", {

            layout: false,

            error: error.message,

            success: null

        });

    }

};

// =========================
// HALAMAN REGISTER
// =========================
exports.registerForm = (req, res) => {

    res.render("auth/register", {

        layout: false

    });

};

// =========================
// PROSES REGISTER
// =========================
exports.register = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const existingUser = await User.findOne({

            where: {

                email

            }

        });

        if (existingUser) {

            return res.send("Email sudah digunakan.");

        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({

            name,

            email,

            password: hashedPassword,

            role: "user"

        });

        res.redirect("/login?success=1");

    } catch (error) {

        console.log(error);

        res.send(error.message);

    }

};

// =========================
// LOGOUT
// =========================
exports.logout = (req, res) => {

    req.session.destroy(() => {

        res.redirect("/login");

    });

};