const routes = require("express").Router();
const CommentRequestController = require("../request/commentRequestController.js")

//redirect to all comment
routes.get("/", function()req,res){
	res.redirect("all")
}

//alcomment
routes.get("/all",CommentRequestController.viewAllComment_get);

//delete comment
routes.get("/:commentId/delete",CommentRequestController.delete_get)

routes.get("/:commentId/edit", CommentRequestController.edit_get)
routes.post("/:commentId/edit", CommentRequestController.edit_post)

module.exports = routes;