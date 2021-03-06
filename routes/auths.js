const routes = require("express").Router();
const UserRequestController = require("../controllers/request/userRequestController.js");

//redirect to all comment

//delete comment
routes.get("/login",UserRequestController.loginAuth_get)
routes.post("/login",UserRequestController.loginAuth_post)

routes.get("/register", UserRequestController.registerAuth_get)
routes.post("/register", UserRequestController.registerAuth_post)

routes.get("/logout", UserRequestController.logoutAuth_get)

module.exports = routes;