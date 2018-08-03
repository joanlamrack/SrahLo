const UserController = require("../object/userController.js");

class UserRequestController{
	constructor(){
	}

	static loginAuth_get(req,res){
		res.send("Ini halaman login");
	}

	static loginAuth_post(req,res){
		UserController
			.login(
				req.body.username,
				req.body.password
			)
			.then((user)=>{
				if(user){
					req.session.user = user.dataValues;
					res.redirect("/dashboard");
				}
				else{
					res.send("id atau password salah");
				}
			})
			.catch((err)=>{
				res.render("error",{err, cssadditional:[],title:"Error"});
			});
	}

	static logoutAuth_get(req,res){
		req.session.user=null;
		res.redirect("/");
	}

	static registerAuth_get(req,res){
		res.send("Ini halaman register");
	}

	static registerAuth_post(req,res){
		UserController
			.add(
				req.body.username, 
				req.body.password
			)
			.then((response)=>{
				res.redirect("/");
			})
			.catch((err)=>{
				res.render("error",{err, cssadditional:[],title:"Error"});
			});
	}


}

module.exports=UserRequestController;