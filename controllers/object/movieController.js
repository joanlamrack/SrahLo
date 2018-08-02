const Model = require("../models");
const Movie = Model.Movie;
const User = Model.User;
const Comment = Model.Comment;

class MovieController{
	constructor(){

	}

	static add(title,year,genre,description,pictureDir){
		return Movie.create({
			title,
			year,
			genre,
			description,
			pictureDir
		})
	}

	static delete(MovieId){
		return Movie.destroy({
			where:{
				id:MovieId
			}
		})
	}

	static update(title,year,genre,description,MovieId){
		return Movie.update({
			title,
			year,
			genre,
			description
		},
		{
			returning:true,
			where:{
				id:MovieId
			}
		});
	}



	static findAll(){
		return Movie.findAll({
			include:[Comment, Rating]
		})
	}

	static findById(MovieId){
		return Movie.findOne({
			include:[Comment,User, Rating],
			where:{
				id: MovieId
			}
		})
	}

	
}

module.exports=MovieController;