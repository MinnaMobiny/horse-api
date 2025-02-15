var express = require("express");
// Importera CORS
var cors = require("cors");
var router = express.Router();
// Importera modell
var SaleHorseModel = require("../models/SaleHorseModel");

// Använd CORS
router.use(cors()); // Tillåter alla domäner att komma åt denna rutt

// GET-routen
router.get("/", async function (req, res, next) {
  try {
    // Hämtar all data med mongoose
    const horses = await SaleHorseModel.find();
    res.json(horses); // Skickar tillbaka hästarna som JSON
  } catch (err) {
    // Felmeddelande om databasen inte svarar
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
