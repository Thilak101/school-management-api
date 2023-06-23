const mongoose = require("mongoose")

const ClassSchema = new mongoose.Schema({
    number_of_students: [{
        type: mongoose.Types.ObjectId,
        ref: "students"
    }],
    class_teacher: [{
        type: mongoose.Types.ObjectId,
        ref: "teachers"
    }],
    className: String
})

const Class = mongoose.model("class", ClassSchema)
module.exports = Class 