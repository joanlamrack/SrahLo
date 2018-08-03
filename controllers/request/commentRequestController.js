const CommentController = require("../object/commentController.js");

class CommentRequestController{
	constructor(){

	}

	//delete comment from their own
	static delete_get(req,res){
		CommentController
			.delete(req.params.commentId)
			.then(()=>{
				res.redirect("back");
			})
			.catch((err)=>{
				res.render("error",{err, cssadditional:[],title:"Error"});
			});
	}

	//all Comment from User themselves
	static viewAllComment_get(req,res){
		CommentController
			.findByUserId(req.params.userId)
			.then((commentsFromUser)=>{
				console.log(commentsFromUser);
				res.render("dashboard",{
					title:"Dashboard",
					cssadditional:[],
					userId:req.params.userId,
					commentsFromUser
				});
			})
			.catch((err)=>{
				res.render("error",{title:"error", err, cssadditional:null});
			});
	}

	static edit_get(req,res){
		//res.send("ini formnya edit movie dengan ID "+req.params.commentId)
		CommentController.findById(Number(req.params.commentId))
			.then((comment)=>{
				console.log(comment.dataValues.commentContent);
				res.render("editcomment",{
					commentContent:comment.dataValues.commentContent,
					title:"edit Comment",
					cssadditional:[],
					userId:req.session.user.id
				});
			})
			.catch((err)=>{
				res.render("error",{err, cssadditional:[],title:"Error"});
			});
		
	}


	static edit_post(req,res){
		CommentController
			.update(req.body.commentContent, req.params.commentId)
			.then((response)=>{
				res.redirect("../../");
			})
			.catch((err)=>{
				res.render("error",{err, cssadditional:[],title:"Error"});
			});
	}


}



module.exports = CommentRequestController;