module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            isEmail: true,
            allowNull: false,
            unique: true
        },
        avatar_url: {
            type: DataTypes.STRING
        },
        role: {
            type: DataTypes.STRING
        },
        favorited_playlists: {
            type: DataTypes.ARRAY(DataTypes.INTEGER)
        },
        favorite_songs: {
            type: DataTypes.ARRAY(DataTypes.STRING)
        }
    })
    return User;
}