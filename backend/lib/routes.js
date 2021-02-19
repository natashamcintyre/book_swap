import { Router } from "express"
const bookApp = require('./controller.js')
const auth = require("../middleware/auth");
const User = require("../models/userModel");
const router = Router()

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

router.get('/user', auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    displayName: user.displayName,
    id: user._id,
  });
});

module.exports = router
