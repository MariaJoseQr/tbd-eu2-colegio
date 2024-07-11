const express = require("express");
const router = express.Router();
const ingresoRouter = require("./reporte");

router.use("/reporte", ingresoRouter);

module.exports = router;
