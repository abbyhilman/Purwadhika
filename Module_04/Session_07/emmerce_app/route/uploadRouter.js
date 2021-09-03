const express = require("express");
const { uploadController } = require("../controllers");
const route = express.Router();

route.get("/All", uploadController.getAllProduct);
route.patch("/editProduct/:id", uploadController.editData);
route.post("/upload", uploadController.uploadFile);
route.get("/getProduct", uploadController.getProduct);
route.get("/category", uploadController.getCategoryProduct);

module.exports = route;
