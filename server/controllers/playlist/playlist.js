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
            // Get songs
            {
                model: db.Song,
                where: { playlistId: req.params.id }
            },
            // Get comments
            {
                model: db.Comment,
                where: { playlistId: req.params.id }

            }
        ]
    })
    .then(results => {
        // If results returns null, try including only songs
        if (results === null) {
            db.Playlist.findOne({
                where: { id: req.params.id },
                include: [
                    {
                        model: db.Song,
                        where: { playlistId: req.params.id }
                    }
                ]
            })
            .then(results => {
                // If results returns null, check for comments but no song
                if (results === null) {
                    db.findOne({
                        where: { id: req.params.id },
                        include: [
                            {
                                model: db.Comment,
                                where: { playlistId: req.params.id }
                            }
                        ]
                    })
                    .then(results => {
                        // If no comments or songs, return just the playlist
                        if (results === null) {
                            db.findOne({
                                where: { id: req.params.id }
                            })
                            .then(results => {
                                res.json({
                                    results: results,
                                    message: 'Playlist fetched successfully!',
                                    tt_code: 'GREEN'
                                })
                            })
                        } else {
                            res.json({
                                results: results,
                                message: 'Playlist fetched successfully!',
                                tt_code: 'GREEN'
                            })
                        }
                    })
                } else {
                    res.json({
                        results: results,
                        message: 'Playlist fetched successfully!',
                        tt_code: 'GREEN'
                    })
                }
            })
        } else {
            res.json({
                results: results,
                message: 'Playlist fetched successfully!',
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