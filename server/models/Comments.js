module.exports = (sequelize, DataTypes) => {
  // Define the Post model containing the title of the post, a description, and a username
  const Comments = sequelize.define('Comments', {
    commentBody: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Comments;
};
