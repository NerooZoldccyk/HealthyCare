const express = require("express");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const patientRoutes = require("./routes/patientRoutes");
const reservationRoutes = require("./routes/reservationRoutes");
const expressLayouts = require("express-ejs-layouts");
const webRoutes = require("./routes/webRoutes");
const session = require("express-session");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());

app.use(session({

    secret: "healthycare123",

    resave: false,

    saveUninitialized: false

}));

app.use((req, res, next) => {

    res.locals.session = req.session;

    next();

});

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("layout", "layouts/main");
app.use(expressLayouts);

app.use("/", webRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/doctors", doctorRoutes);

app.use("/api/patients", patientRoutes);

app.use("/api/reservations", reservationRoutes);

module.exports = app;