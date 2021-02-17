import express from 'express'
const app = express();


app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use(routes);

const server = app.listen(3001, function (){
  console.log("Connected");
})

export default server;