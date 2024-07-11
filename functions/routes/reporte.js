const express = require("express");
const controller = require("../controllers/reporte");

const router = express.Router();

router.get(`/:id`, controller.getById);
router.get(`/`, controller.get);
router.post("/", controller.post);

module.exports = router;
