const Model = require("../../models");
const Comment = Model.Comment;
const Movie = Model.Movie;
const User = Model.User;


class CommentController{
	constructor(){

	}

	static add(UserId,MovieId,commentContent){
		return Comment.create({
			UserId,
			MovieId,
			commentContent,
			commentDate:new Date
		})
	}

	static delete(commentId){
		return Comment.destroy({
			where:{id:commentId}
		})
	}

	static update(commentContent, commentId){
		return Comment.update({
			commentContent
		},
		{
			returning:true,
			where:{
				id:commentId
			}
		});
	}

	static findByUserId(UserId){
		return Comment.findAll({
			include:[Movie],
			where:{
				UserId
			}
		})
	}

	static findByMovieId(MovieId){
		return Comment.findAll({
			include:[Movie,User],
			where:{
				MovieId
			}
		});
	}


}

module.exports = CommentController;