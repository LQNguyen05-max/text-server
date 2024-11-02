module.exports = (sequelize, DataTypes) => {
    // Define the Post model containing the title of the post, a description, and a username
    const Posts = sequelize.define('Posts', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postDescription: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Posts
}