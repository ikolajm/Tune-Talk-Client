const router = require('express').Router(),
      db = require('../../db').db,
      bcrypt = require('bcryptjs'),
      jwt = require('jsonwebtoken');

// Get user by id
router.get('/:id', (req, res) => {
    db.User.findOne({
        where: { id: req.params.id },
        include: [
            {
                model: db.Playlist,
                where: { userId: req.params.id } 
            }
        ]
    })
    .then(results => {
        if (results === null) {
            db.User.findOne({
                where: { id: req.params.id }
            })
            .then(results => {
                res.json({
                    catch: results,
                    message: 'User successfully found!',
                    tt_code: 'GREEN'
                })
            })
        } else {
            res.json({
                results: results,
                message: 'User successfully found!',
                tt_code: 'GREEN'
            })
        }
        
    })
    .catch(err => {
        res.json({
            message: 'Error fetching user!',
            tt_code: 'RED'
        })
    })
})

// Singup 
router.post('/signup', (req, res) => {
    db.User.create({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email,
        avatar_url: req.body.avatar_url,
        role: 'user',
        favorited_playlists: [],
        favorite_songs: []
    })
    .then(createdUser => {
        let token = jwt.sign( { id: createdUser.id }, process.env.JWT_SECRET, { expiresIn: 60*60*24 });
        
        res.json({
            user: createdUser,
            sessionToken: token,
            message: 'User successfully created!',
            tt_code: 'GREEN'
        })
    })
    .catch(err => {
        res.json({
            message: err.message,
            tt_code: 'RED'
        })
    })
})

// Signin 
router.post('/signin', (req, res) => {
    db.User.findOne({
        where: { username: req.body.username }
    })
    .then(foundUser => {
        bcrypt.compare(req.body.password, foundUser.password, (err, match) => {
            if (match) {
                let token = jwt.sign({ id: foundUser.id }, process.env.JWT_SECRET, { expiresIn: 60*60*24 });

                res.json({
                    user: foundUser,
                    sessionToken: token,
                    message: 'Successfully logged in!',
                    tt_code: 'GREEN'
                })
            } else {
                res.json({
                    message: 'Password does not match the found username!',
                    tt_code: 'RED'
                })
            }
        })
    })
    .catch(err => {
        res.json({
            message: 'User not found!',
            tt_code: 'RED'
        })
    })
})

module.exports = router;