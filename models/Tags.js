const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
  text: { type: String, unique: true },
  count: { type: Number, unique: false },
}, { timestamps: true });

const Note = mongoose.model('Note', tagSchema);

module.exports = Note;
