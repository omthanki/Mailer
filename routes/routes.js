const routes = require("express").Router()

const controller = require("../controllers/controller")

routes.post("/", controller.home)
routes.get("/", controller.home)

module.exports = routes