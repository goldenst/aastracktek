const Scales = require("../models/Scales");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

// @Description       GET all Scales
// @Route             GET api/v1/scales
// @access            Public
exports.getScales = asyncHandler(async (req, res, next) => {
  
  res.status(200).json(res.advancedResults);
});

// @Description       GET single scale
// @Route             GET api/v1/scales/:id
// @access            Public
exports.getScale = asyncHandler(async (req, res, next) => {
  const scales = await Scales.findById(req.params.id)

  if (!scales) {
    return next(
      new ErrorResponse(`No Scale sheet with the id of -${req.params.id}`),
      404
    );
  }

  res.status(200).json({
    success: true,
    data: scales
  });
});

// @Description       POST Add Scale
// @Route             POST api/v1/scales/add
// @access            Private
exports.addScale = asyncHandler(async (req, res, next) => {
  
  const scales = await Scales.create(req.body);

  res.status(200).json({
    success: true,
    data: scales
  });
});

// @Description       PUT Update Scales
// @Route             PUT api/v1/scales/:id
// @access            Private
exports.updateScale = asyncHandler(async (req, res, next) => {
  let scales = await Scales.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!scales) {
    return next(
      new ErrorResponse(`No Scale slip with the id of ${req.params.id}`),
      404
    );
  }

  res.status(200).json({
    success: true,
    data: scales
  });
});

// @Description       DELETE Delete Scales
// @Route             DELETE api/v1/scales/:id
// @access            Private
exports.deleteScale = asyncHandler(async (req, res, next) => {
  const scales = await Scales.findById(req.params.id);

  if (!scales) {
    return next(
      new ErrorResponse(`No scale slip with the id of ${req.params.id}`),
      404
    );
  }

  await scales.remove();

  res.status(200).json({
    success: true,
    data: {}
  });
});
