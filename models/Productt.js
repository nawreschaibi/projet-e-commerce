const mongoose = require("mongoose");

const schema = mongoose.Schema;
const ProducttSchema = new schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Productt", ProducttSchema);
