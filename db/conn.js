const mongoose = require("mongoose")

mongoose.set('strictQuery', false);

mongoose.connect(process.env.DB).then( () => { console.log("Database connected successfully")}).catch((err) => { console.log(err); })