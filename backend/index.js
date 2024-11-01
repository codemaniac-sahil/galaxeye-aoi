const express = require("express")
const dotenv = require("dotenv")
const cors = require('cors')
const dbconnect = require("./database/dbconnect")
const tileRoute = require('./routes/route')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use('/api', tileRoute)
dbconnect()


app.listen((PORT), () => {
    console.log(`Server is running at port ${PORT}`)
})