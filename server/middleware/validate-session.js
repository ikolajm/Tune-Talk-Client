const jwt = require('jsonwebtoken'),
            db = require('../db').db;

const validateSession = (req, res, next) => {
  if (req.method == 'OPTIONS') {
    next();
  } else {
    const token = req.headers.authorization;
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (decodedToken) {
        db.User.findOne({ where: { id: decodedToken.id } })
          .then(user => {
            if (!user) {
              throw 'err';
            } else {
              req.user = user;
              next();
            }
          })
          .catch(err => {
              next(err);
          })
      } else {
        req.errors = err;
        return next();
      }
    })
  }
}

module.exports = validateSession