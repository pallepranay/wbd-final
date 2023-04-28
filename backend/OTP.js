const mongoose = require('mongoose')

const OTPSchema = new mongoose.Schema({
    email: String,
    OTP: String,
    OTPTime: Number
})
OTPSchema.set('timestamps',true);
const OTP = mongoose.model("OTP",OTPSchema)
module.exports = OTP