const routes = require("express").Router();
const UserRequestController = require("../controllers/request/userController.js");

//redirect to all comment
routes.get("/", function(req,res){
	res.redirect("/login")
})

//delete comment
routes.get("/login",UserRequestController.loginAuth_get)
routes.post("/login",UserRequestController.loginAuth_post)

routes.get("/register", UserRequestController.registerAuth_get)
routes.post("/register", UserRequestController.registerAuth_post)

module.exports = routes;