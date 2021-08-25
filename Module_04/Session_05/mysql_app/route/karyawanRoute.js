const express = require("express");
const { karyawanController } = require("../controller");
const router = express.Router();

router.get("/", karyawanController.getDataKaryawan);
router.post("/", karyawanController.postDataKaryawan);
router.patch("/:id", karyawanController.patchKaryawan);
router.delete("/:id", karyawanController.deleteKarayawan);

module.exports = router;
