import express from 'express'
import cors from 'cors'
import bodyParse from 'body-parser'
import mongoose from 'mongoose'
// var passport = require('passport');
// var crypto = require('crypto');
// const LocalStrategy = require('passport-local').Strategy;

import config from './config/config'
import passport from './config/passportSetup'

const session = require('express-session')
const MongoStore = require('connect-mongo').default

require('dotenv').config()
const routes = require('./lib/routes.js')
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

const sessionStore = MongoStore.create({ mongoUrl: config.db, collection: 'sessions' })

app.use(session({
  secret: 'very very secret',
  resave: false,
  saveUninitialized: true,
  store: sessionStore
}))

app.use(passport.initialize())
app.use(passport.session())

// Routes must be after passport and session set up
app.use('/user-new', routes)
app.use('/user', routes)
app.use('/login', routes)
app.use('/', routes)
app.use('/search', routes)
app.use('/request-book', routes)

// this was for heroku deployment testing
app.get('/homepage', (req, res) => {
  res.send('This is our homepage')
})

const server = app.listen(config.port, function () {
  console.log('App listening on port ' + config.port)
})

export default server
