var express = require("express");
var router = express.Router();
// Importera modell
var SaleHorseModel = require("../models/SaleHorseModel");

// GET-routen
router.get("/", async function (req, res, next) {
  try {
    // Hämtar all data med mongoose
    const horses = await SaleHorseModel.find();
    res.json(horses);
  } catch (err) {
    // Felmeddelande om databasen inte svarar
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
