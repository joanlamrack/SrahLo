class MiddlewareRoutes{
	constructor(){

	}

	static sessionchecker(req,res,next){
		if(req.session.user){
			res.redirect(`/dashboard/${req.session.user.id}`);
		}else{
			next();
		}
	}
	
	static sessioncheckerinverted(req,res,next){
		if(req.session.user){
			next();
		}else{
			res.redirect("/");
		}
	}
}

module.exports = MiddlewareRoutes;