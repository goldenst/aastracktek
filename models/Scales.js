const mongoose = require("mongoose");


const ScalesSchema = new mongoose.Schema({
  raceNum: {
    type: String
  },
  division: {
    type: String,
    required:[true, "Please entrer a Division"]
  },
  carNum: {
    type: String,
    required: [true, 'Please Enter a Car Number']
  },
  qualweight: {
    type: Number,
    required: [true, 'Please Enter a Qualifing Weight']
  },
  qualLeft: {
    type: Number,
    required: [true,'Please Enter qualifing Left Side %']
  },
  startRaceWeight: {
    type: Number
  },
  startRaceLeft: {
    type: Number
  },
  midRaceWeight: {
    type: Number
  },
  midRaceLeft: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("scales", ScalesSchema);