// Hey guys
require('dotenv').config();

const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
    // Controllers
      user = require('./controllers/user/user'),
      userAuth = require('./controllers/user/userAuth'),
      playlist = require('./controllers/playlist/playlist'),
      playlistAuth = require('./controllers/playlist/playlistAuth'),
      song = require('./controllers/song/song'),
      comment = require('./controllers/comment/comment'),
      sequelize = require('./db').sequelize;


app.use(require('./middleware/headers'));

app.use(express.static(__dirname + '/public'));

sequelize.sync();
app.use(bodyParser.json());

// UNPROTECTED
app.use('/user', user);
app.use('/playlist', playlist);

// PROTECTED
app.use(require('./middleware/validate-session'));
app.use('/user', userAuth);
app.use('/playlist', playlistAuth);
app.use('/', song);
app.use('/', comment);

app.listen(process.env.PORT, () => {
    console.log(`Application backend is live on ${process.env.PORT}`);
})
