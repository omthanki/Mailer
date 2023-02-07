const nodemailer = require("nodemailer")
const emailModel = require("../models/model")
const emailExists = require("email-existence")

module.exports.home = async (req, res) => {

    if (req.method == "GET") {
        res.render("index")
    }

    if (req.method == "POST") {

        try {

            const email = req.body.useremail

            emailExists.check(email, async (error, response) => {
                if (response) {

                    const data = new emailModel({ email })

                    const isInserted = await data.save()

                    if (isInserted) {
                        res.send("Inserted Successfully")
                    }

                }
                else {
                    res.send("This email doesn't exists")
                }
            })

        } catch (error) {
            res.send(error)
        }

    }

}

module.exports.sendMail = async (req, res) => {


    try {

        const emailAdd = req.body.useremail

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });

        let message = {
            from: process.env.EMAIL, // sender address
            to: emailAdd, // list of receivers
            subject: "Node Mailer", // Subject line
            text: "Hello", // plain text body
            html: "<b>Hello world?</b>", // html body
        }

        const data = await transporter.sendMail(message)

        if (data) {
            res.send("Sent successfully")
        }

    } catch (error) {
        console.log(error);
        res.send(error)
    }

}