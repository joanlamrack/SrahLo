const routes = require("express").Router();
const auths = require("./auths.js");
const comments = require("./comments.js");
const movies = require("./movies.js");

routes.use("/auths", auths);
routes.use("/dashboard/:userId/comments", comments);
routes.use("/dashboard/:userId/movies", movies);


let sessionchecker = (req,res,next)=>{
	if(req.session.user){
		console.log(req.session.user);
		res.redirect(`/dashboard/${req.session.user.id}`);
	}else{
		next();
	}
};

routes.get("/", sessionchecker, function(req,res){
	res.render("index.ejs",{
		title:"SrahLo : Movie rating platform",
		cssadditional:"index"
	});
});




routes.get("/dashboard",sessionchecker,function(req,res){

});

routes.get("/dashboard/:userId", function(req,res){
	res.send("ini dashboard");
});








//redirect to dashboard/:userId/ if logged in



module.exports = routes;