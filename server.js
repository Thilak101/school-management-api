const express = require('express')
require("dotenv").config()
const bodyParser = require('body-parser')

const apiRouter = require('./routes')
const PORT = process.env.PORT || 4000
const connectDB = require('./config/db')

const app = express()
connectDB()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/api", apiRouter)


app.get('/', (req, res) => {
    res.send(`server was started`)
})

app.listen(PORT, () => {
    console.log(`server was up and running on ${PORT}`)
})