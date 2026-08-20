const express = require("express");
const router = express.Router();

const passport = require("passport");
const catchAsync = require("../utils/catchAsync");

const User = require("../models/user");
const UserController = require("../controllers/UserController");
const { storeReturnTo } = require("../middleware");

router
    .route("/register")
    .get(UserController.renderRegister)
    .post(catchAsync(UserController.register));

router
    .route("/login")
    .get(UserController.renderLogin)
    .post(
        storeReturnTo,
        passport.authenticate("local", {
            failureFlash: true,
            failureRedirect: "/login",
        }),
        UserController.login
    );

router.get("/logout", UserController.logout);

module.exports = router;
