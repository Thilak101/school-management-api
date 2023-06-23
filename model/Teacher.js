const mongoose = require("mongoose")

const TeacherSchema = new mongoose.Schema({
    teacher_name: String,
    qualification: String,
    experience: String,
    contactNo: Number,
    studentId: [{
        type: mongoose.Types.ObjectId,
        ref: "students"
    }],
    classId: [{
        type: mongoose.Types.ObjectId,
        ref: "class"
    }]

})

const Teacher = mongoose.model("teachers", TeacherSchema)
module.exports = Teacher