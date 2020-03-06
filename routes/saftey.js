const express = require("express");
const {
  getSaftey,
  getSafteys,
  updateSaftey,
  createSaftey,
  deleteSaftey
} = require("../controlers/saftey");

const Saftey = require("../models/Saftey");

const router = express.Router({ mergeParams: true });

const { protect, authorize } = require("../middleware/auth");
const advancedResults = require("../middleware/advancedResults");

//  router.use(protect)
//  router.use(authorize('admin'))

router
  .route("/")
  .get(advancedResults(Saftey), getSafteys)
  .post(createSaftey);

router
  .route("/:id")
  .get(getSaftey)
  .put(updateSaftey)
  .delete(deleteSaftey);

module.exports = router;