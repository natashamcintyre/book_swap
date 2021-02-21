import express from 'express'
import cors from 'cors'
import bodyParse from "body-parser"
import mongoose from 'mongoose'
import config from './config/config'
import routes from './lib/routes'
// for sessions and authentication:
import session from 'express-session'
import passport from 'passport'
const LocalStrategy = require('passport-local').Strategy
var crypto = require('crypto')

const MongoStore = require('connect-mongo')(session)
require('dotenv').config()

// Could do with some input from DB expert here. See https://levelup.gitconnected.com/everything-you-need-to-know-about-the-passport-local-passport-js-strategy-633bbab6195
// Does the below line need merging with the const db lines?
// then const sessionStore would follow?
const connection = mongoose.createConnection(process.env.DB_STRING)
const sessionStore = new MongoStore({ mongooseConnection: connection, })
mongoose.connect(config.db, { useNewUrlParser: true,
useFindAndModify: false})

const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:',config.db)
})

db.on('error', err => {
  console.error('connection error:', err)
})

var app = express()
// these two below are both replaced by bodyparse
// app.use(express.json())
// app.use(express.urlencoded({ extended: true}))
app.use(bodyParse.json())
app.use(cors())

// ALL ABOUT SESSIONS AND PASSPORT!
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUnitialized: true,
  store: sessionStore
}))
// START PASSPORT
// these two passports use NodeJS built-in crypto library. Possibly look at better ones?
validPassword(password, hash, salt) => {
  var hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex')
  return hash === hashVerify
}

genPassword(password) => {
  var salt = crypto.randomBytes(32).toString('hex')
  var genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex')
  return {
    salt: salt,
    hash: genHash
  }
}

passport.use(new LocalStrategy(
  function(username, password, cb) {
    User.findOne({ username: username })
      .then((user) => {
        if (!user) { return cb(null, false) }

        // function defined lower down
        const isValid = validPassword(password, user.hash, user.salt)

        if (isValid) {
          return cb(null, user)
        } else {
          return cb(null, false)
        }
      })
      .catch((err) => {
        cb(err)
      })
}))

passport.serializeUser(function (user, cb) {
  cb(null, user.id)
})

passport.deserializeUser(function (id, cb) {
  User.findById(id, function (err, user) {
    if (err) { return cb(err) }
    cb(null, user)
  })
})

app.use(passport.initialize())
app.use(passport.session())
// End of passport stuff

app.use('/user-new', routes)
app.use('/', routes)

// this was for heroku deployment testing
app.get('/homepage', (req, res) => {
  res.send("This is our homepage");
})

const server = app.listen(config.port, function(){
  console.log('App listening on port ' + config.port);
 })

export default server;
