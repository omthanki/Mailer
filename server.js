require('dotenv').config()
const express = require('express')
const app = express()
const hbs = require("hbs")

app.set("view engine", "hbs")


const route = require("./routes/routes")
app.use(route)

const port = process.env.PORT
app.listen(port, () => {
    console.log("Server is listening at port no.: " + port)
})