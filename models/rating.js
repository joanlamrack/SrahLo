'use strict';
module.exports = (sequelize, DataTypes) => {
  var Rating = sequelize.define('Rating', {
    MovieId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    UserId:  {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    ratingValue: {
      type:DataTypes.REAL,
      validate:{
        max: {
          args:5,
          msg:"Maximum rating 5"
        },
        min: {
          args:1,
          msg:"Minimum rating 1"
        }
      }
    },
    ratingDate: DataTypes.DATE
  }, {});
  Rating.associate = function(models) {
    Rating.belongsTo(models.Movie);
    Rating.belongsTo(models.User);
  };
  return Rating;
};