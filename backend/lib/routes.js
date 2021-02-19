import {Router} from "express"
const bookApp = require('./controller.js')
const router = Router()

router.get('/index', async (req, res) => {
  res.sendFile(path.join(__dirname+'../views/index.html'))
})

router.get('/', async (req, res) => {
  await bookApp.getBookshelf()
  .then((books) => res.json(books))
  .catch((err) => res.status(404).json(err))
});

router.post('/add-book', async (req, res) => {
  await bookApp.addBook(req.body)
  .then((book) => res.json(book))
  .catch((err) => res.status(404).json(err))
});

module.exports = router
