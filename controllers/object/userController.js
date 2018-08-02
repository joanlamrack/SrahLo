const Model = require("../../models");
const User = Model.User;
const crypto = require("crypto")

class UserController{
	constructor(){

	}

	static add(username,password,email){
		let salt = crypto.createCipher("md5").update(username).digest("hex");
		let combined = password + salt;
		let encryptedPassword = crypto.createHash("md5").update(combined).digest("hex");


		return User.create({
			username,
			password:encryptedPassword,
			email
		})
	}

	static login(username,password){
		let salt = crypto.createCipher("md5").update(username).digest("hex");
		let combined = password + salt;
		let encryptedPassword = crypto.createHash("md5").update(combined).digest("hex");

		return User.findOne({
			where:{
				username,
				password:encryptedPassword
			}
		})
	}

	static delete(userId){
		return User.destroy({
			where:{id:UserId}
		})
	}

	static update(username,password,email,UserId){
		return User.update(
				{
					username,
					password,
					email
				},
				{returning: true, where: {id:id}}
			);

	}

	static updateUsername(username,UserId){
		return User.update(
		{
			username
		},
		{
			returning:true,
			where:{
				id:UserId
			}
		});
	}

	static updatePassword(password,UserId){
		return User.update(
		{
			password
		},
		{
			returning:true,
			where:{
				id:UserId
			}
		});
	}

	static updateEmail(email,UserId){
		return User.update(
		{
			email
		},
		{
			returning:true,
			where:{
				id:UserId
			}
		});
	}
}

module.exports=UserController;