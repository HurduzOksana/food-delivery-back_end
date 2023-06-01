const express = require("express");
const ctrl = require("../../controllers/food");
const { ctrlWrapper } = require("../../helpers");
const router = express.Router();

router.get("/category-list", ctrlWrapper(ctrl.getCategoryList));
router.get("/main-page", ctrlWrapper(ctrl.getMainPage));
router.get("/:category", ctrlWrapper(ctrl.getRecipesByCategory));
router.get("/id/:id", ctrlWrapper(ctrl.getRecipeById));
module.exports = router;
