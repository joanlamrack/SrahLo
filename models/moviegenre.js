'use strict';
module.exports = (sequelize, DataTypes) => {
  var MovieGenre = sequelize.define('MovieGenre', {
    MovieId: DataTypes.INTEGER,
    GenreId: DataTypes.INTEGER
  }, {});
  MovieGenre.associate = function(models) {
    //MovieGenre.belongsTo(models.Movie);
    //MovieGenre.belongsTo(models.Genre);
  };
  return MovieGenre;
};