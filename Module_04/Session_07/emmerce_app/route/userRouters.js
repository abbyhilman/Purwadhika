const express = require("express");
const { userControllers } = require("../controllers");
const routers = express.Router();

routers.get("/get", userControllers.getDataUser);
routers.post("/registrasi", userControllers.addData);
routers.patch("/login", userControllers.editData);

module.exports = routers;
