const express = require("express");
const {
  getScales,
  getScale,
  addScale,
  updateScale,
  deleteScale
} = require("../controlers/scales");

const Scales = require("../models/Scales");

const router = express.Router({ mergeParams: true });
const { protect } = require("../middleware/auth");
const advancedResults = require("../middleware/advancedResults");

router
  .route("/")
  .get(advancedResults(Scales), getScales)
  .post(addScale);
router
  .route("/:id")
  .get(getScale)
  .put(updateScale)
  .delete(deleteScale)

module.exports = router;
