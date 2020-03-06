const mongoose = require("mongoose");

const SafteySchema = new mongoose.Schema({
  carNum: {
    type: String,
    required: [true, "Please Enter a car number "]
  },
  division: {
    type: String,
    required: [true, "please Add a Division"]
  },
  helmetDate: {
    type: String
  },
  seatbeltDate: {
    type: String
  },
  windowNet:{
    type: String
  },
  headAndNeck: {
    type: String
  },
  fireSuite: {
    type: String
  },
  gloves: {
    type: String
  },
  shoes: {
    type: String
  },
  seat: {
    type: String
  },
  firesystem: {
    type: String
  },
  radio: {
    type: String
  },
  transponder: {
    type: String
  },
  drivelineLoop: {
    type: Boolean
  },
  sideExhaust: {
    type: String
  },
  masterKill: {
    type: String
  },
  fuelLines: {
    type: String
  },
  fuelCellHeight: {
    type: String
  },
  colapsableCoulum: {
    type: String
  },
  cage: {
    type: String
  },
  weightBlocks: {
    type: String
  },
  drivelinepainted: {
    type:String
  },
  notes: {
    type: String
  }
});

module.exports = mongoose.model("saftey", SafteySchema);
