const mongoose = require("mongoose");
const { Schema } = mongoose;

const db = mongoose.connection.useDb("colegio");

const ReporteSchema = new Schema(
  {
    alumno: {
      type: String,
      required: true,
    },
    curso: {
      type: String,
      required: true,
    },
    nota1: {
      type: Number,
      required: true,
    },
    nota2: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "reporte",
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const Reporte = db.model("ReporteSchema", ReporteSchema);
module.exports = { Reporte };
