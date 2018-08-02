'use strict';
module.exports = (sequelize, DataTypes) => {
  var Movie = sequelize.define('Movie', {
   year: {
      type:DataTypes.INTEGER,
      validate:{
        isNumeric: {
          msg:"Year Field only receive numeric value"
        },
        min:{
          args:1200,
          msg:"Movie year not valid"
        }
      }
    },
    description: DataTypes.STRING,
    genre: {
      DataTypes.STRING},
    rating:{
      type:DataTypes.REAL,
      validate:{
        max: 5,
        min: 1
        }
      },
    pictureDir: DataTypes.STRING
  }, {});

  Movie.associate = function(models) {
    Movie.hasMany(models.Rating);
    Movie.hasMany(models.Comment);
    Movie.belongsTo(models.Genre,{through:"MovieGenre"});
  };
  return Movie;
};