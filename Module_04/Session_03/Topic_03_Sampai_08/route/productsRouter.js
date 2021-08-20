const express = require("express");
const { productsController } = require("../controller");
const router = express.Router();

router.get("/products", productsController.getProducts);
router.post("/products", productsController.postProducts);
router.patch("/products", productsController.patchProduct);
router.put("/products", productsController.putProduct);
router.delete("/products", productsController.deleteProduct);

module.exports = router;
