import express from 'express'
import cors from 'cors'
import bodyParse from 'body-parser'
import mongoose from 'mongoose'

const session = require('express-session');
const MongoStore = require('connect-mongo').default
// var passport = require('passport');
// var crypto = require('crypto');
// const LocalStrategy = require('passport-local').Strategy;

import config from './config/config'
import passport from './config/passportSetup'

require('dotenv').config();
const routes = require('./lib/routes.js');
const app = express()

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
  secret: 'very very secret',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: db, collection: 'sessions' })
}))

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
