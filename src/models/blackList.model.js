const mongoose = require("mongoose");

const blackListSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: false,
  },
);

const blackListModel = mongoose.model("blackList", blackListSchema);

module.exports = blackListModel;
