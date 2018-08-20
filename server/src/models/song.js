module.exports = (sequelize,DataTypes) => {
    const Song = sequelize.define('Song', {
        title: DataTypes.STRING,
        artist: DataTypes.STRING,
        album: DataTypes.STRING,
        genre: DataTypes.STRING,
        youtubeID: DataTypes.STRING,
        albumImageUrl: DataTypes.STRING,
        lyrics: DataTypes.TEXT,
        tab: DataTypes.TEXT
    })

    return Song
}

