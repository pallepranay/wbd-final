const mongoose = require("mongoose");

const imgSchema = new mongoose.Schema({
  name: String,
  // img: {
  //   data: Buffer,
  //   contentType: String,
  // },
  img: String
});
imgSchema.set('timestamps',true);
module.exports = ImageModel = mongoose.model("Image", imgSchema);