module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('comment', {
        owner: {
            type: DataTypes.STRING,
            allowNull: false
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Comment;
}