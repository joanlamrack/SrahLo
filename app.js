const app = require("express")();
const express = require("express");
const routes = require("./routes");
const body = require("body-parser");
const session = require("express-session");

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