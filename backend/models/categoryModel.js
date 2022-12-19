const mongoose = require("mongoose");
const categorySchema = mongoose.Schema({
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      //   required: true,
    },
  ],
  categoryName: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Category", categorySchema);
