module.exports = (sequelize, DataTypes) => {
    const Playlist = sequelize.define('playlist', {
        owner: {
            type: DataTypes.STRING,
            allowNull: false
        },
        thumbnail: {
            type: DataTypes.STRING,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Playlist;
}