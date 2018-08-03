const routes = require("express").Router();
const auths = require("./auths.js");
const comments = require("./comments.js");
const movies = require("./movies.js");
const CommentRequestController = require("../controllers/request/commentRequestController.js");
const MiddlewareRoutes = require("../middlewares/route.js");

routes.use("/auths", auths);
routes.use("/dashboard/:userId/comments", comments);
routes.use("/dashboard/:userId/movies", movies);

routes.get("/", MiddlewareRoutes.sessionchecker, function(req,res){
	res.render("index.ejs",{
		title:"SrahLo : Movie rating platform",
		cssadditional:["index"]
	});
});

routes.get("/dashboard",
	MiddlewareRoutes.sessionchecker,
	function(req,res){
		res.redirect("/");
	});

routes.get("/dashboard/:userId",
	MiddlewareRoutes.sessioncheckerinverted,
	CommentRequestController.viewAllComment_get);


module.exports = routes;