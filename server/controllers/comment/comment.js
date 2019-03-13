const router = require('express').Router(),
      db = require('../../db').db;

// Create comment
router.post('/playlist/:plId/comment/add', (req, res) => {
    db.Comment.create({
        userId: req.user.id,
        playlistId: req.params.plId,
        owner: req.user.username,
        avatar: req.user.avatar_url,
        content: req.body.content
    })
    .then(createdComment => {
        res.json({
            comment: createdComment,
            message: 'Comment successfully created!',
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
router.put('/comment/edit/:id', (req, res) => {
    db.Comment.update({
        content: req.body.content
    },
        { where: { userId: req.user.id, id: req.params.id } }
    )
    .then(updatedComment => {
        res.json({
            comment: updatedComment,
            message: 'Comment successfully updated!',
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
router.delete('/comment/delete/:id', (req, res) => {
    db.Comment.destroy({
        where: { userId: req.user.id, id: req.params.id }
    })
    .then(deletedComment => {
        res.json({
            message: 'Comment successfully deleted!',
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
router.delete('/comment/delete/:id', (req, res) => {
    if (req.user.role === 'admin') {
        db.Comment.destroy({
            where: { id: req.params.id }
        })
        .then(deletedComment => {
            res.json({
                message: 'Comment successfully deleted!',
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