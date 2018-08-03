const app = require("express")();
const express = require("express");
const routes = require("./routes");
const body = require("body-parser");
const session = require("express-session");
const ratingHelper = require("./helpers/ratinghelper.js");


app.use(function(req,res,next){
	res.locals.ratingHelper= ratingHelper;
	next();
});

app.use(body.urlencoded({extended:true}));
app.use(body.json());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.listen(3000);



app.use(session({
	secret:"its a secret!",
	resave: false,
	saveUninitialized: true
}));



app.use("/", routes);

app.get("*", function(req, res){
	res.render("error",{err:"page not found", cssadditional:[], title:"error"});
});