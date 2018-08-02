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
		.then((response)=>{
			res.send(response);
		})
		.catch((err)=>{
			res.send(err);
		})
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