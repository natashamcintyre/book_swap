import express from 'express'
const app = express()
import BookApp from './lib/model'

let bookApp;
if (process.env.npm_lifecycle_event == "test") {
  bookApp = new BookApp("/\///json/\//testBooks.json")
} else {
  bookApp = new BookApp("/\///json/\//books.json")
}
 
app.get('/', async (req, res) => {
  let result = bookApp.getBookshelf()
    res.json(result)
})

app.listen(3001, function (){
  console.log("Connected");
})

export default app
