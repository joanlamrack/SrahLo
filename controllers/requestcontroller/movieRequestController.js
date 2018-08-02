const MovieController = require("../object/movieController.js");
const CommentController = require("../object/commentController.js");
const RatingController = require("../object/ratingController.js");

class MovieRequestController{
	constructor(){

	}

	static viewAll_get(req,res){
		MovieController
		.findAll()
		.then((Movies)=>{
			res.send(Movies)
		})
		.catch((err)=>{
			res.send(err)
		})
	}

	static viewOne_get(req,res){
		MovieController
		.findById(req.params.movieId)
		.then((movie)=>{
			res.send(movie);
		})
		.catch((err)=>{
			res.send(err);
		})
	}

	//create comment on movie
	static createComment_get(req,res){
		res.send("ini form comment")
	}

	static createComment_post(req,res){
		CommentController
		.add(
			req.params.userId,
			req.params.movieId,
			req.body.commentContent
		)
		.then((response)=>{
			res.send(response)
		})
		.catch((err)=>{
			res.send(err)
		})
	}

	static giveRating_get(req,res){
		res.send("ini page buat rating")
	}

	static giveRating_post(req,res){
		MovieController
		.findById(req.params.movieId)
		.then((movie)=>{
			if(movie.rating){
				movie.rating = ((movie.rating*movie.Ratings.length)+req.body.rating)/(movie.Ratings.length+1)
			}
			else{
				movie.rating = req.body.rating
			}
			return movie.save()
		})
		.then(()=>{
			return RatingController
			.add(
				req.params.movieId,
				req.params.userId,
				req.body.rating
				)
		})
		,then((response)=>{
			res.send(response);
		})
		.catch((err)=>{
			res.send(err);
		})
	}
}

module.exports = MovieRequestController;