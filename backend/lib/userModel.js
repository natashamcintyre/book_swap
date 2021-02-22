const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  location: { type: String, required: true },
  password: {type: String, required: true, minlegth: 6 },
})

module.exports = User = mongoose.model('user', userSchema);
