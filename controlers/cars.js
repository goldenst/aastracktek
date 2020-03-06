const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Cars = require("../models/Cars");

// Routes ___________________________________

// @Description       GET all Cars
// @Route             GET api/v1/cars
// @access            Private
exports.getCars = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @Description       GET single Car
// @Route             GET api/v1/car/:id
// @access            Private 
exports.getCar = asyncHandler(async (req, res, next) => {
  const cars = await Cars.findById(req.params.id);
  res.status(200).json({ success: true, data: cars });
});

// @Description       Create Car
// @Route             POST api/v1/Car
// @access            Private 
exports.createCar = asyncHandler(async (req, res, next) => {
  const cars = await Cars.create(req.body);
  res.status(201).json({ success: true, data: cars });
});

// @Description       Update car
// @Route             PUT api/v1/car/:id
// @access            Private 
exports.updateCar = asyncHandler(async (req, res, next) => {
  const cars = await Cars.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  res.status(201).json({ success: true, data: cars });
});

// @Description       Delete Car
// @Route             Delete api/v1/car/:id
// @access            Private 
exports.deleteCar = asyncHandler(async (req, res, next) => {
  await Cars.findByIdAndDelete(req.params.id);
  res.status(201).json({ success: true, data: {} });
});