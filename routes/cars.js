const express = require("express");
const {
  getCar,
  getCars,
  updateCar,
  createCar,
  deleteCar
} = require("../controlers/cars");

const Cars = require("../models/Cars");

const router = express.Router({ mergeParams: true });

const { protect, authorize } = require("../middleware/auth");
const advancedResults = require("../middleware/advancedResults");

//  router.use(protect)
//  router.use(authorize('admin', 'official'))

router
  .route("/")
  .get(advancedResults(Cars), getCars)
  .post(createCar);

router
  .route("/:id")
  .get(getCar)
  .put(updateCar)
  .delete(deleteCar);

module.exports = router;
