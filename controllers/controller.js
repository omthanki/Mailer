const nodemailer = require("nodemailer")

module.exports.home = async (req, res) => {

    if (req.method == "get") {
        res.render("index")
    }

    if (req.method == "post") {

        try {

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
                to: "othanki874@rku.ac.in, baz@example.com", // list of receivers
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

}