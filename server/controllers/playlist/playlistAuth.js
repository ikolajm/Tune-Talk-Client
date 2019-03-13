const router = require('express').Router(),
      db = require('../../db').db;

// Playlist create
router.post('/create', (req, res) => {
    db.Playlist.create({
        owner: req.user.username,
        thumbnail: req.body.thumbnail,
        name: req.body.name,
        userId: req.user.id
    })
    .then(createdPlaylist => {
        res.json({
            playlist: createdPlaylist,
            message: 'Playlist successfully created!',
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

// Playlist edit
router.put('/edit/:id', (req, res) => {
    db.Playlist.update({
        name: req.body.name,
        thumbnail: req.body.thumbnail
    },
        { where: { userId: req.user.id, id: req.params.id } }
    )
    .then(updatedPlaylist => {
        res.json({
            playlist: updatedPlaylist,
            message: 'Playlist successfully updated!',
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

// Playlist delete (normal)
router.delete('/delete/:id', (req, res) => {
    db.Playlist.destroy({
        where: { userId: req.user.id, id: req.params.id }
    })
    .then(deletedPlaylist => {
        res.json({
            message: 'Playlist successfully deleted!',
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

// Playlist delete (admin)
router.delete('/delete/:id/admin', (req, res) => {
    if (req.user.role === 'admin') {
        db.Playlist.destroy({
            where: { id: req.params.id }
        })
        .then(deletedPlaylist => {
            res.json({
                message: 'Playlist successfully deleted!',
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