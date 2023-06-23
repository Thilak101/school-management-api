const router = require("express").Router()
const { Student, Class, Teacher } = require('../model')

router.get('/', (req, res) => {
    res.send('students route')
})

router.post('/add', async (req, res) => {
    try {
        const student = await Student.create(req.body)
        const number_of_students = await Class.findByIdAndUpdate(req.body.classId, {
            $push: { number_of_students: student._id }
        })
        const teacherId = await Teacher.findByIdAndUpdate(req.body.classTeacherId, {
            $push: { studentId: student._id }
        })
        res.json({ student, number_of_students, teacherId })
    }
    catch (err) {
        res.json({ msg: err.message })
    }
})

router.get('/data', async (req, res) => {
    try {
        const data = await Student.find().populate("classId")
        const data2 = await Student.find().populate("classTeacherId")
        res.json({ data, data2 })
    }
    catch (err) {
        res.json({ msg: err.message })
    }
})

router.delete('/delete/:id', async (req, res) => {
    await Student.findByIdAndDelete(req.params.id)
    res.json({ msg: "deleted" })
})


module.exports = router