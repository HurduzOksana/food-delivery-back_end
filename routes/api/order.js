const express = require("express");
const ctrl = require("../../controllers/contacts");
const { ctrlWrapper } = require("../../helpers");
const { validateBody, isValidId } = require("../../middlewares");
const { shemas } = require("../../models/cart");
const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:orderId", isValidId, ctrlWrapper(ctrl.getById));

router.post("/", validateBody(shemas.joiContactSchema), ctrlWrapper(ctrl.add));

router.delete("/:orderId", isValidId, ctrlWrapper(ctrl.remove));

router.put(
  "/:orderId",
  isValidId,
  validateBody(shemas.joiContactSchema),
  ctrlWrapper(ctrl.updateById)
);

module.exports = router;
