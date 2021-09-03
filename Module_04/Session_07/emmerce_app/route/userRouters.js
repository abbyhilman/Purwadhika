const express = require("express");
const { userControllers } = require("../controllers");
const { auth } = require("../helper/authToken");
const routers = express.Router();

routers.post("/login", userControllers.getDataUser);
routers.post("/registrasi", userControllers.addData);
routers.patch("/edit/:id", userControllers.editData);
routers.patch("/verify", auth, userControllers.verification);
routers.get("/get", userControllers.getAllUsers);
routers.get("/userId", userControllers.getUsersById);

module.exports = routers;
