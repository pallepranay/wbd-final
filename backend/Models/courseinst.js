// Course Instructor Schema for login and signup

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const instructorschema = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
})
instructorschema.set('timestamps',true);
const instructor = mongoose.model('Instructor', instructorschema);
module.exports = instructor;