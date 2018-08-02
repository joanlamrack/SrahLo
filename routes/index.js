const routes = require("express").Router();
const auths = require("./auths.js");
const comments = require("./comments.js");
const movies = require("./movies.js");

routes.use("/auths", auths);
routes.use("/dashboard/:userId/comments", comments);
routes.use("/dashboard/:userId/movies", movies);

//redirect to login if not logged in
routes.get("/", function()req,res){
	res.redirect("/auths/login")
}

routes.get("/", function()req,res){
	res.redirect("/dashboard/:userId")
}

//redirect to dashboard/:userId/ if logged in



module.exports = routes;