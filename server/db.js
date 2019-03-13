const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
})

sequelize.authenticate()
.then(() => {
    console.log(`Postgres server connected on port ${process.env.PORT}`)
})
.catch(err => {
    console.log(err.message)
})

// // Associations
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./models/User')(sequelize, Sequelize);
db.Playlist = require('./models/Playlist')(sequelize, Sequelize);
db.Song = require('./models/Song')(sequelize, Sequelize);
db.Comment = require('./models/Comment')(sequelize, Sequelize);

db.Playlist.belongsTo(db.User, { onDelete: 'cascade' });
db.User.hasMany(db.Playlist, { onDelete: 'cascade' });
db.Song.belongsTo(db.Playlist, { onDelete: 'cascade' });
db.Playlist.hasMany(db.Song, { onDelete: 'cascade' });
db.Comment.belongsTo(db.Playlist, { onDelete: 'cascade' });
db.Playlist.hasMany(db.Comment, { onDelete: 'cascade' });
db.Comment.belongsTo(db.User, { onDelete: 'cascade' });
db.User.hasMany(db.Comment, { onDelete: 'cascade' });
db.User.hasMany(db.Song, { onDelete: 'cascade' });
db.Song.belongsTo(db.User, { onDelete: 'cascade' });


module.exports = {
    db: db,
    sequelize: sequelize
};