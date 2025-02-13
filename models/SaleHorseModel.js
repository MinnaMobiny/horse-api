// Importera mongoose
var mongoose = require("mongoose");

// Schema för databasen
var SaleHorseSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    breed: String,
    price: Number,
    sport: String,
  },
  {
    // Schemat finns i "Horses" i mongoDB
    collection: "Horses",
  }
);

module.exports = mongoose.model("SaleHorseModel", SaleHorseSchema);
