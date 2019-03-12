const router = require('express').Router(),
      db = require('../../db').db;

// Find all playlists
router.get('/', (req, res) => {
    db.Playlist.findAll()
    .then(foundPlaylists => {
        res.json({
            playlists: foundPlaylists,
            message: 'Successfully grabbed all playlists!',
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

// Find single playlist 
router.get('/:id', (req, res) => {
    db.Playlist.findOne({
        where: { id: req.params.id },
        include: [
            {
                // Songs
                model: db.Song,
                where: { playListId: req.params.id },
                include: [
                    {
                        // Comments
                        model: db.Comment,
                        where: { playListId: req.params.id }
                    }
                ]
            }
        ]
    })
    .then(results => {
        if (results === null) {
            db.Playlist.findOne({
                where: { id: req.params.id },
                include: [
                    {
                        // Songs
                        model: db.Song,
                        where: { playListId: req.params.id }
                    }
                ]
            })
            .then(results => {
                if (results === null) {
                    db.Playlist.findOne({
                        where: { id: req.params.id }
                    })
                    .then(results => {
                        if (results === null) {
                            db.Playlist.findOne({
                                where: { id: req.params.id },
                                include: [ 
                                    {
                                        model: db.Comment,
                                        where: { playlistId: req.params.id }
                                    }
                                ]
                            })
                            .then(results => {
                                res.json({
                                    playlist: results,
                                    message: 'Playlist successfully fetched!',
                                    tt_code: 'GREEN'
                                })
                            })
                        } else {
                            res.json({
                                playlist: results,
                                message: 'Playlist successfully fetched!'
                            })
                        }
                    })
                } else {
                    res.json({
                        playlist: results,
                        message: 'Playlist successfully found!',
                        tt_code: 'GREEN'
                    })
                }
            })
        } else {
            res.json({
                results: results,
                message: 'Playlist successfully found!',
                tt_code: 'GREEN'
            })
        }
        
    })
    .catch(err => {
        res.json({
            message: 'Error fetching playlist!',
            tt_code: 'RED'
        })
    })
})

module.exports = router;