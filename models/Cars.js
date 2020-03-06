const mongoose = require("mongoose");


const CarsSchema = new mongoose.Schema({
 carNum : {
   type: String
 },
 carOwner: {
   type: String
 },
 division: {
   type: String
 },
 textNumber: {
   type: String
 }
});

module.exports = mongoose.model("cars", CarsSchema);