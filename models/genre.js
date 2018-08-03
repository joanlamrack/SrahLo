'use strict';
module.exports = (sequelize, DataTypes) => {
  var Genre = sequelize.define('Genre', {
    name: DataTypes.STRING
  }, {});
  Genre.associate = function(models) {
    //Genre.belongsTo(models.Movie,{through:"MovieGenre"});
    //Genre.hasMany(models.MovieGenre);
  };
  return Genre;
};