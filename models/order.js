const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleErrors } = require("../helpers");

const orderSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    products: [
      {
        productId: Number,
        quantity: Number,
        name: String,
        price: Number,
      },
    ],
    active: {
      type: Boolean,
      default: true,
    },
    modifiedOn: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

orderSchema.post("save", handleErrors);

const joiOrderSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
});

const shemas = {
  joiOrderSchema,
};

const Contact = model("contact", orderSchema);

module.exports = {
  Contact,
  shemas,
};
