const CommentController = require("../object/commentController.js");

class CommentRequestController{
	constructor(){

	}

	//delete comment from their own
	static delete_get(req,res){
		CommentController
		.delete(req.params.commentId)
		.then(()=>{
			res.send(`Deleted Comment With Id ${req.params.commentId}`)
		})
		.catch((err)=>{
			res.send(err);
		})
	}

	//all Comment from User themselves
	static viewAllComment_get(req,res){
		CommentController
		.findByUserId(req.params.userId)
		.then((commentsFromUser)=>{
			res.send(commentsFromUser)
		})
		.catch((err)=>{
			res.send(err);
		})
	}

	static edit_get(req,res){
		res.send("ini formnya edit movie dengan ID "+req.params.commentId)
	}


	static edit_post(req,res){
		CommentController
		.update(req.body.commentContent, req.params.commentId)
		.then((response)=>{
			res.send(response);
		})
		.catch((err)=>{
			res.send(err);
		})
	}


}



module.exports = CommentRequestController;