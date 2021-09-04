const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    title: { type: String, required: true },
    hashTags: { type: Array },
  },
  {
    timestamps: true,
    collection: "Posts",
  }
);

postSchema.statics.findAll = function () {
  return this.find({});
};

module.exports = mongoose.model("Post", postSchema);
