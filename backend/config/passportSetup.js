import passport from 'passport'
var crypto = require('crypto');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../lib/userModel')

function validPassword(password, hash, salt) {
  var hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
  return hash === hashVerify;
}

passport.use(new LocalStrategy(
  function(username, password, cb) {
      User.findOne({ username: username })
          .then((user) => {
              if (!user) { return cb(null, false) }

              const isValid = validPassword(password, user.hash, user.salt);

              if (isValid) {
                  return cb(null, user);
              } else {
                  return cb(null, false);
              }
          })
          .catch((err) => {
              cb(err);
          });
}));

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  User.findById(id, function (err, user) {
      if (err) { return cb(err); }
      cb(null, user);
  });
});

export default passport
