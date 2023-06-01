const { Schema, model } = require("mongoose");

const userSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    phone: {
      type: Number,
      required: [true, "Number is required"],
    },
    shoppingList: [
      {
        ttl: String,
        thb: String,
        id: String,
        measure: String,
        recipesId: Array,
      },
    ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

const User = model("user", userSchema);

module.exports = User;
