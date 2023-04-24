const mongoose=require('mongoose')
const Schema = mongoose.Schema;
let Instructor = new Schema({
    cover:{
        type:Buffer
    },
    Prof_name: {
      type: String
    },
    work: {
      type: Number
    },
    linkedin: {
      type: Boolean
    },
    phnumber: {
      type: Number,
      required: true
    }
  });

const model = mongoose.model("instructor", instructor);

module.exports = model;