class RatingHelper{
	constructor(){

	}

	static ratingExistOrNot(rating){
		if(rating){
			return rating;
		}
		else{
			return "No Rating";
		}

	}

	static dateFormatter(date){
		var monthNames = [
			"January", "February", "March",
			"April", "May", "June", "July",
			"August", "September", "October",
			"November", "December"
		];

		var day = date.getDate();
		var monthIndex = date.getMonth();
		var year = date.getFullYear();

		return day + " " + monthNames[monthIndex] + " " + year;
	}

	static isMovieAlreadyRatedByUser(ratingsObjs,userid){
		for(let ratingObj of ratingsObjs){
			if(ratingObj.dataValues.UserId === userid){
				return true;
			}
		}
		return false;
	}
}

module.exports=RatingHelper;