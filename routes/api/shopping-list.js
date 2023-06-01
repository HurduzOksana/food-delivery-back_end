const express = require("express");
const ctrl = require("../../controllers/shopping-list");
const { ctrlWrapper } = require("../../helpers");
const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getShopingList));
router.post("/", ctrlWrapper(ctrl.addInShopingList));
router.delete("/:shoppingListId", ctrlWrapper(ctrl.removeItemFromList));

module.exports = router;
