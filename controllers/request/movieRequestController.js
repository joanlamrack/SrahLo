const MovieController = require("../object/movieController.js");
const CommentController = require("../object/commentController.js");
const RatingController = require("../object/ratingController.js");

class MovieRequestController{
	constructor(){

	}

	static viewAll_get(req,res){
		MovieController
			.findAll()
			.then((movies)=>{
				res.render("movies",{
					movies,
					cssadditional:[],
					title:"All Movies",
					userId:req.params.userId
				});
			})
			.catch((err)=>{
				res.render("error",{err, cssadditional:[],title:"Error"});
			});
	}

	static viewOne_get(req,res){
		MovieController
			.findById(req.params.movieId)
			.then((movie)=>{
				res.render("moviedetail",{
					movie,
					cssadditional:["moviedetail"],
					title:"Detail for: "+movie.title,
					userId:req.session.user.id,
					comments:movie.Comments
				});
			})
			.catch((err)=>{
				res.render("error",{err, cssadditional:[],title:"Error"});
			});
	}

	//create comment on movie
	static createComment_get(req,res){
		res.send("ini form comment");
	}

	static createComment_post(req,res){
		CommentController
			.add(
				req.session.user.id,
				req.params.movieId,
				req.body.commentContent
			)
			.then((response)=>{
				res.redirect("/..");
			})
			.catch((err)=>{
				res.render("error",{err, cssadditional:[],title:"Error"});
			});
	}

	static giveRating_get(req,res){
		res.send("ini page buat rating");
	}

	static giveRating_post(req,res){
		MovieController
			.findById(req.params.movieId)
			.then((movie)=>{
				if(movie.rating){
					console.log(movie.rating);
					movie.rating = ((movie.rating*movie.Ratings.length)+Number(req.body.rating))/(movie.Ratings.length+1);
				}
				else{
					movie.rating = Number(req.body.rating);
				}
				return movie.save();
			})
			.then(()=>{
				return RatingController
					.add(
						req.params.movieId,
						req.session.user.id,
						Number(req.body.rating)
					);
			})
			.then((response)=>{
				res.redirect("back");
			})
			.catch((err)=>{
				res.render("error",{err, cssadditional:[],title:"Error"});
			});
	}
}

module.exports = MovieRequestController;