const mongoose = require("mongoose")

const emailSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    }
})

const emailmodel = new mongoose.model("Emails", emailSchema)

module.exports = emailmodel