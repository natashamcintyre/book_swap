import express from 'express'
const app = express()
import BookApp from './lib/model'

let bookApp = new BookApp("/\///json/\//testBooks.json")
// bookApp.addBook('Just So Stories', 'Rudyard Kipling', 9780192822765, 'test_postcode', 'test_phoneNumber')

app.get('/', async (req, res) => {
  let result = bookApp.getBookshelf()
    res.json(result)
})

app.listen(3001, function (){
  console.log("Connected");
})  

export default app