'use strict';
module.exports = (sequelize, DataTypes) => {
	var User = sequelize.define('User', {
		username: {
    	type:DataTypes.STRING,
    	validate:{
    		allowNull: false,
    		isUnique:function(value, next) {

					User.find({
						where: {email: value},
						attributes: ['id']
					})
						.done(function(error, user) {
							if (error)
								return next(error);

							if (user)
								return next('Username already in use!')
							next();

						});
				}
			}
		},
		email: {
    	type: DataTypes.STRING,
    	validate:{
    		is: {
    			args:/^\w+@([a-z]+\.)+[a-z]{2,3}$/,
    			msg:"This is not email format"
    		},
    		allowNull:{
    			args:false,
    			msg:"Email field is required"
    		},
    		isUnique:function(value, next) {
					User.find({
						where: {email: value},
						attributes: ['id']
					})
						.done(function(error, user) {
							if (error)
								return next(error);

							if (user)
								return next('Email address already in use!')
							next();

						});
				}
    	}
		},
		password: {
    	type:DataTypes.STRING,
    	validate:{
    		min: {
    			args:8,
    			msg:"Password length minimum 8 characters"
    		}
    	}
		}
	}, {});
	User.associate = function(models) {
		User.hasMany(models.Comment);
		User.hasMany(models.Rating);
	};
	return User;
};