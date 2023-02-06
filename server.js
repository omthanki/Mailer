require('dotenv').config()
const { urlencoded } = require('express')
const express = require('express')
const app = express()
const hbs = require("hbs")

require("./db/conn")

app.set("view engine", "hbs")

app.use(urlencoded({extended: false}))

const route = require("./routes/routes")
app.use(route)

const port = process.env.PORT
app.listen(port, () => {
    console.log("Server is listening at port no.: " + port)
})