const   router = require('express').Router(),
        db = require('../../db').db,
        bcrypt = require('bcryptjs');

// Update profile
router.put('/edit/:id', (req, res) => {
    db.User.update({
        username: req.body.username,
        avatar_url: req.body.avatar_url,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    },
        { where: { id: req.user.id, id: req.params.id } }
    )
    .then(updatedUser => {
        res.json({
            user: updatedUser,
            message: 'User successfully updated!',
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

// Delete profile (normal user)
router.delete('/delete/:id', (req, res) => {
    db.User.destroy({
        where: { id: req.user.id, id: req.params.id }
    })
    .then(deletedUser => {
        res.json({
            user: null,
            sessionToken: undefined,
            message: 'User successfully deleted!',
            tt_code: 'GREEN'
        })
    })
    .catch(err => {
        res.json({
            message: err.message,
            tt_code: red
        })
    })
})

// Delete profile (admin)
router.delete('/delete/:id/admin', (req, res) => {
    if (req.user.role === 'admin') {
        db.User.destroy({
            where: { id: req.user.id, id: req.params.id }
        })
        .then(deletedUser => {
            res.json({
                user: null,
                sessionToken: undefined,
                message: 'User successfully deleted!',
                tt_code: 'GREEN'
            })
        })
        .catch(err => {
            res.json({
                message: err.message,
                tt_code: red
            })
        })
    } else {
        res.json({
            message: 'You do not have the permissions to alter this profile!',
            tt_code: 'RED'
        })
    }
    
})

module.exports = router;