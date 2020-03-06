const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Saftey = require("../models/Saftey");

// Routes ___________________________________

// @Description       GET all Saftey sheets
// @Route             GET api/v1/saftey
// @access            Private
exports.getSafteys = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @Description       GET single saftey Sheet
// @Route             GET api/v1/saftey/:id
// @access            Private 
exports.getSaftey = asyncHandler(async (req, res, next) => {
  const saftey = await Saftey.findById(req.params.id);
  res.status(200).json({ success: true, data: saftey });
});

// @Description       Create Saftey sheef
// @Route             POST api/v1/Saftey
// @access            Private 
exports.createSaftey = asyncHandler(async (req, res, next) => {
  const saftey = await Saftey.create(req.body);
  res.status(201).json({ success: true, data: saftey });
});

// @Description       Update Saftey
// @Route             PUT api/v1/saftey/:id
// @access            Private 
exports.updateSaftey = asyncHandler(async (req, res, next) => {
  const saftey = await Saftey.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  res.status(201).json({ success: true, data: saftey });
});

// @Description       Delete Saftey
// @Route             Delete api/v1/saftey/:id
// @access            Private 
exports.deleteSaftey = asyncHandler(async (req, res, next) => {
  await Saftey.findByIdAndDelete(req.params.id);
  res.status(201).json({ success: true, data: {} });
});