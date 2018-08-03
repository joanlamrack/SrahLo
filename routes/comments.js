const routes = require("express").Router();
const CommentRequestController = require("../controllers/request/commentRequestController.js")
const MiddlewareRoutes = require("../middlewares/route.js");
//redirect to all comment
routes.get("/", function(req,res){
	res.redirect("all");
});

//alcomment
routes.get("/all",MiddlewareRoutes.sessioncheckerinverted,CommentRequestController.viewAllComment_get);

//delete comment
routes.get("/:commentId/delete",MiddlewareRoutes.sessioncheckerinverted,CommentRequestController.delete_get);

routes.get("/:commentId/edit", MiddlewareRoutes.sessioncheckerinverted,CommentRequestController.edit_get);
routes.post("/:commentId/edit",MiddlewareRoutes.sessioncheckerinverted, CommentRequestController.edit_post);

module.exports = routes;