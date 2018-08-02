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
			//res.send(response);
			if(user){
				req.session.user = user.dataValues;
				res.redirect("/dashboard");
			}
			else{
				res.send('id atau password salah')
			}
		})
		.catch((err)=>{
			res.send(err);
		})
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
			req.body.password,
			req.body.email
			)
		.then((response)=>{
			res.send(response)
		})
		.catch((err)=>{
			res.send(err)
		})
	}


}

module.exports=UserRequestController;