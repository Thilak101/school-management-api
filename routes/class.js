const router = require("express").Router()
const { Class } = require('../model')

router.get('/', (req, res) => {
    res.send("class")
})


router.post('/add', async (req, res) => {
    try {
        const classRoom = new Class(req.body)
        const data = await classRoom.save()
        console.log(data)
        res.json(data)
    }
    catch (err) {
        res.json({ msg: err.message })
    }
})

router.get('/data', async (req, res) => {
    try {
        const data = await Class.find().populate("number_of_students")
        const data2 = await Class.find().populate("class_teacher")
        res.json({ data, data2 })
    }
    catch (err) {
        res.json({ msg: err.message })
    }
})

router.delete("/delete/:id", async (req, res) => {
    try {
        await Class.findByIdAndDelete(req.params.id)
        res.json({ msg: "deleted" })
    }
    catch (err) {
        res.json({ msg: err.message })
    }

})

module.exports = router