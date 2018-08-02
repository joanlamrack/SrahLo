'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    MovieId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    commentContent: DataTypes.STRING,
    commentDate: DataTypes.DATE
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.Movie);
    Comment.belongsTo(models.User);
  };
  return Comment;
};