import express from 'express'
import bodyParse from 'body-parser'
const app = express()
const routes = require('./lib/routes.js')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParse.json())

app.use('/', routes)

const server = app.listen(3001, () => {
  console.log('Connected')
})

export default server
