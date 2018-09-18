const Note     = require('../models/Note');
const classify = require('../srv/classifier')


exports.create = (req, res) => {
  // Note.create(classify(req.body.text));

  var note = new Note(classify(req.body.text));

  note.save(function(err, note) {
    if (err) return console.error(err);

    res.send(note)
  });
}

exports.update = (req, res) => {
  Note.findById(req.params.id, function(err, note) {
    var newNote = classify(req.body.text)

    note.text         = newNote.text;
    note.tags         = newNote.tags;
    note.type         = newNote.type;
    note.description  = newNote.description;;
    note.domain       = newNote.domain;

    note.save((err) => {
      if (err) {
        if (err.code === 11000) {
          req.flash('errors', { msg: "Can't send Note." });
          res.send(note)
        }
        return next(err);
      }
      req.flash('success', { msg: 'Note information has been updated.' });
      res.send(note)
    });
  });
}

exports.delete = (req, res) => {
  Note.update({ _id: req.params.id }, { $set: { archived: true, archived_on: new Date() } }, function(err) {
    if (err) return handleError(err);
  });
  res.send({});
}

exports.getDomain = (req, res) => {
  console.log("Getting Notes!")
  Note.find({domain: req.params.domain}, function (err, notes) {
    console.log(notes);
    res.send(notes);
  });
}


exports.index = (req, res) => {
  console.log("Getting Notes!")
  Note.find({ archived: false }, function (err, notes) {
    console.log(notes);
    res.send(notes);
  });
}
