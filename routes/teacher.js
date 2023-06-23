const router = require("express").Router()
const { Teacher, Class } = require('../model')

router.get('/', (req, res) => {
    res.send("teacher route")
})

router.post('/add', async (req, res) => {
    try {
        const teacher = new Teacher(req.body)
        const data = await teacher.save()
        const classTeacher = await Class.findByIdAndUpdate(req.body.classId, {
            $push: { class_teacher: teacher._id }
        })
        res.json({ data, classTeacher })
    }
    catch (err) {
        res.json({ msg: err.message })
    }
})

router.get('/data', async (req, res) => {
    try {
        const data = await Teacher.find().populate("studentId")
        const data2 = await Teacher.find().populate("classId")
        res.json({ data, data2 })
    }
    catch (err) {
        res.json({ msg: err.message })
    }
})

router.delete('/delete/:id', async (req, res) => {
    await Teacher.findByIdAndDelete(req.params.id)
    res.json({ msg: "deleted" })
})


module.exports = router