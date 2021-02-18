import express from 'express'
const app = express();
const routes = require('./lib/routes.js')
import bodyParse from "body-parser"

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(bodyParse.json());

app.use('/', routes);

const server = app.listen(3001, function (){
  console.log("Connected");
})

export default server;

