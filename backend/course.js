const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CourseSchema = new Schema({
    id: {
        type: Number, 
    },
    cover: {
        type: String,
    },
    instImage: {
        type: String,
        required: true,
    },
    courseLink: {
        type: String,
        required: true,
    },
    instrName:{
        type: String,
        required: true,
    },
    workingAt:{
        type: String,
        required: true,
    },
    desCap: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    LastUpdated: {
        type: String,
    },
    rating: {
        type: String,
        required: true,
    },
    totalUsers: {
        type: String,
        required: true,
    },
    discountPrice: {
        type: String,
        required: true,
    },
})

const course = mongoose.model('Course', CourseSchema);
module.exports = course;
