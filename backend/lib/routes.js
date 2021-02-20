import { Router } from "express"
const bookApp = require('./controller.js');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("./userModel");
const router = Router();

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

router.post('/user/new', async (req, res) => {
  try {
    let { username, email, password, passwordCheck, location } = req.body;

    if(!username || !email || !password || !passwordCheck || !location)
      return res.status(400).json({ msg: "Not all fields have been filled"});
    if(password.length < 6)
      return res
        .status(400)
        .json({ msg: "Password needs to be 6 characters or longer"});
    if(password !== passwordCheck)
      return res
        .status(400)
        .json({ msg: "Enter the password twice to be verified"});

    const existingUser = await User.findOne({  username: username});
    const existingEmail = await User.findOne({ email: email});
    if (existingUser || existingEmail)
      return res
        .status(400)
        .json({ msg: "An account with this username or email address already exists"})

    const newUser = new User({
      username,
      email,
      location,
      password,
    });

    const savedUser = await newUser.save();
    re.json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get('/user', auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    displayName: user.displayName,
    id: user._id,
  });
});

module.exports = router
