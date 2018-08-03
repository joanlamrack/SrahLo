const routes = require("express").Router();
const MovieRequestController = require("../controllers/request/movieRequestController.js");
const MiddlewareRoutes = require("../middlewares/route.js");
//redirect to all comment
routes.get("/", function(req,res){
	res.redirect("/all");
});

//delete comment
routes.get("/all",MiddlewareRoutes.sessioncheckerinverted,
MovieRequestController.viewAll_get );

routes.get("/:movieId",
	MiddlewareRoutes.sessioncheckerinverted,
	MovieRequestController.viewOne_get);

routes.get("/:movieId/giverating",
	MiddlewareRoutes.sessioncheckerinverted,
	MovieRequestController.giveRating_get);

routes.post("/:movieId/giverating",
	MiddlewareRoutes.sessioncheckerinverted,
	MovieRequestController.giveRating_post);

routes.get("/:movieId/addComment",
	MiddlewareRoutes.sessioncheckerinverted,
	MovieRequestController.createComment_get);

routes.post("/:movieId/addComment",
	MiddlewareRoutes.sessioncheckerinverted,
	MovieRequestController.createComment_post);

module.exports = routes;