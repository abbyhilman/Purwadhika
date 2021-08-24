const express = require("express");
const { karyawanController } = require("../controller");
const router = express.Router();

router.get("/karyawan", karyawanController.getDataKaryawan);
router.post("/karyawan", karyawanController.postDataKaryawan);
router.patch("/karyawan:id", karyawanController.patchKaryawan);
router.delete("/karyawan:id", karyawanController.deleteKarayawan);

module.exports = router;
