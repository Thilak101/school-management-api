const mongoose = require("mongoose")

const StudentsSchema = new mongoose.Schema({
    student_name: String,
    enrollment_date: String,
    classId: {
        type: mongoose.Types.ObjectId,
        ref: "class"
    },
    classTeacherId: {
        type: mongoose.Types.ObjectId,
        ref: "teachers"
    },
    address: String,
    contactNo: Number
})

const Student = mongoose.model("students", StudentsSchema)
module.exports = Student