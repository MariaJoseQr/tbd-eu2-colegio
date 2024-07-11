const { Reporte } = require("../models/reporte");

exports.getById = async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await Reporte.findById(id);

    if (!doc) return res.status(404).send({ error: "Reporte no econtrado." });

    res.send({ doc });
  } catch (err) {
    console.error("Error fetching report: ", err);
    res.status(500).send({ error: "An error occurred while retrieving data." });
  }
};

exports.get = async (req, res) => {
  try {
    const docs = await Reporte.find({});
    if (docs.length === 0) console.log("No reports found.");
    else console.log(`Found ${docs.length} reports.`);

    res.send({ docs });
  } catch (err) {
    console.error("Error fetching reports: ", err);
    res.status(500).send({ error: "An error occurred while retrieving data." });
  }
};

exports.post = async (req, res) => {
  try {
    const { alumno, curso, nota1, nota2 } = req.body;

    const nuevoReporte = new Reporte({ alumno, curso, nota1, nota2 });
    const reporte = await nuevoReporte.save();

    res.status(201).json(reporte);
  } catch (error) {
    console.error("Error creating report: ", error);
    res.status(500).json({ error: "An error occurred while saving data." });
  }
};
