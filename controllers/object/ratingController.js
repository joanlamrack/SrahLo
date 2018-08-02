const Model = require("../../models");
const Rating = Model.Rating;
const Movie = Model.Movie;

class RatingController{
	constructor(){

	}

	//Add movie rating, update rating on the movie table
	static add(MovieId,UserId,rating){
		return Rating.create({
			MovieId,
			UserId,
			rating
		})
	}

	static getJHowManyRatingCountFromMovieId(MovieId){
		return Rating.count({
			where:{
				MovieId
			}
		})
	}
}

module.exports = RatingController;