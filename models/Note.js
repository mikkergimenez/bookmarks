const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  text: { type: String, unique: true },
  description: { type: String, unique: true },
  type: { type: String, unique: false },
  domain: { type: String, unique: false },
  archived: { type: Boolean, unique: false },
  archived_on: { type: Date, unique: false },
  tags: [String]
}, { timestamps: true });

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
