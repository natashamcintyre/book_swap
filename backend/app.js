import express from 'express'
import cors from 'cors'
const app = express();
const routes = require('./lib/routes.js')
import bodyParse from "body-parser"

import mongoose from 'mongoose'
import config from './config/config';

mongoose.connect(config.db, { useNewUrlParser: true,
useFindAndModify: false})

const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:',config.db)
})

db.on('error', err => {
  console.error('connection error:', err)
})

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(bodyParse.json());
app.use(cors());
app.use('/user-new', routes);
app.use('/', routes);

// this was for heroku deployment testing
app.get('/homepage', (req, res) => {
  res.send("This is our homepage");
})

const server = app.listen(config.port, function(){
  console.log('App listening on port ' + config.port);
 })

export default server;
