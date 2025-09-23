const express = require('express')
const dotenv = require('dotenv').config()
const contactRoute = require("./routes/contactRoutes")
const errorHandler = require('./middleware/errorHandler')
const connectDB = require('../backend/config/dbConnection')

const app = express()


const port = process.env.port || 5000

app.use(express.json()) // accept json data in API (req.body)
app.use("/api/contacts",contactRoute)
app.use(errorHandler)

connectDB()

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})