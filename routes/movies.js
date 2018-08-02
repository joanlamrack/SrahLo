const routes = require("express").Router();
const MovieRequestController = require("../controllers/request/movieRequestController.js")
//redirect to all comment
routes.get("/", function()req,res){
	res.redirect("/all")
}


//all Movies
routes.get("/all", function()req,res){
	res.redirect("/all")
}

//delete comment
routes.get("/all",MovieRequestController )

routes.get("/:movieId", MovieRequestController.viewOne_get)

routes.get("/:movieId/giverating",MovieRequestController.giveRating_get)
routes.post("/:movieId/giverating",MovieRequestController.giveRating_post)

routes.get("/:movieId/addComment",MovieRequestController.createComment_get)
routes.post("/:movieId/addComment",MovieRequestController.createComment_post)

module.exports = routes;