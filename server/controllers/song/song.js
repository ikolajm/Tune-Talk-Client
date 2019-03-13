const router = require('express').Router(),
      db = require('../../db').db;

// Create comment
router.post('/playlist/:plId/song/add', (req, res) => {
    db.Song.create({
        name: req.body.name,
        album: req.body.album,
        artist: req.body.artist,
        thumbnail: req.body.thumbnail,
        playlistId: req.params.plId,
        userId: req.user.id
    })
    .then(createdSong => {
        res.json({
            song: createdSong,
            message: 'Song successfully created!',
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

// Edit comment
router.put('/song/edit/:id', (req, res) => {
    db.Song.update({
        name: req.body.name,
        album: req.body.album,
        artist: req.body.artist,
        thumbnail: req.body.thumbnail
    },
        { where: { userId: req.user.id, id: req.params.id } }
    )
    .then(updatedSong => {
        res.json({
            song: updatedSong,
            message: 'Song successfully updated!',
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

// Delete comment
router.delete('/song/delete/:id', (req, res) => {
    db.Song.destroy({
        where: { userId: req.user.id, id: req.params.id }
    })
    .then(deletedSong => {
        res.json({
            message: 'Song successfully deleted!',
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

// Delete comment (admin
router.delete('/song/delete/:id', (req, res) => {
    if (req.user.role === 'admin') {
        db.Song.destroy({
            where: { id: req.params.id }
        })
        .then(deletedSong => {
            res.json({
                message: 'Song successfully deleted!',
                tt_code: 'GREEN'
            })
        })
        .catch(err => {
            res.json({
                message: err.message,
                tt_code: 'RED'
            })
        })
    } else {
        res.json({
            message: 'You do not have permission to manipulate this data!',
            tt_code: 'RED'
        })
    }
})

module.exports = router;