import express from 'express'
import cors from 'cors'
import bodyParse from 'body-parser'
var passport = require('passport');
var crypto = require('crypto');
const LocalStrategy = require('passport-local').Strategy;

import mongoose from 'mongoose'
import config from './config/config'

const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);

require('dotenv').config();
const app = express()
const routes = require('./lib/routes.js');

mongoose.connect(config.db, {
  useNewUrlParser: true,
  useFindAndModify: false
})

const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', config.db)
})

db.on('error', err => {
  console.error('connection error:', err)
})

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
app.use(bodyParse.json())
app.use(cors())
app.use('/user-new', routes)
app.use('/login', routes)
app.use('/', routes)


// const sessionStore = new MongoStore({ mongooseConnection: db, collection: 'sessions' })

app.use(session({
  secret: process.env.Secret,
  resave: false,
  saveUninitialized: true,
  // store: sessionStore
}))

function validPassword(password, hash, salt) {
  var hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
  return hash === hashVerify;
}
function genPassword(password) {
  var salt = crypto.randomBytes(32).toString('hex');
  var genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
  
  return {
    salt: salt,
    hash: genHash
  };
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
app.use(passport.initialize());
app.use(passport.session());

// this was for heroku deployment testing
app.get('/homepage', (req, res) => {
  res.send('This is our homepage')
})

const server = app.listen(config.port, function () {
  console.log('App listening on port ' + config.port)
})

export default server
