const routes = require("express").Router();
const auths = require("./auths.js");
const comments = require("./comments.js");
const movies = require("./movies.js");

routes.use("/auths", auths);
routes.use("/dashboard/:userId/comments", comments);
routes.use("/dashboard/:userId/movies", movies);



let sessionchecker = (req,res,next)=>{
    if(req.session.user){
        res.redirect(`/dashboard/${req.session.user.id}`)
    }else{
        res.redirect("/auths/login")
    }
}

routes.get("/", function(req,res){
	res.redirect("/dashboard")
})

routes.get("/dashboard",sessionchecker,function(req,res){

});

routes.get("/dashboard/:userId", function(req,res){
	res.send("ini dashboard");
})






//redirect to dashboard/:userId/ if logged in



module.exports = routes;