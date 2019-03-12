module.exports = (sequelize, DataTypes) => {
    const Song = sequelize.define('song', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        album: {
            type: DataTypes.STRING,
            allowNull: true
        },
        artist: {
            type: DataTypes.STRING,
            allowNull: false
        },
        thumbnail: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
    return Song;
}