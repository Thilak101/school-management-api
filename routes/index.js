const router = require("express").Router()

const studentRoute = require("./student")
const teacherRoute = require("./teacher")
const classRoute = require('./class')

router.use('/student', studentRoute)
router.use('/teacher', teacherRoute)
router.use('/class', classRoute)

module.exports = router