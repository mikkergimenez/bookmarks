const express     = require('express')
const app         = express()
const debug       = require('debug')('http');
const bodyParser  = require('body-parser')

const classify    = require('./srv/classifier')
const db          = require('./srv/db');

app.use(express.static('dist'))
app.use(bodyParser.json());


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html')
})

app.get('/assets/:name', function (req, res) {
  var filename = req.params.name;
  res.sendFile(__dirname + `/dist/${filename}`)
});

app.post('/note', function (req, res) {
  const notes       = db.getCollection('notes');

  var note = notes.insert(classify(req.body.text));

  res.send(note)
});

app.put('/note/:id', function (req, res) {
  const notes       = db.getCollection('notes');

  var note    = notes.get(req.params.id)
  var newNote = classify(req.body.text)
  console.log(note);
  note.text         = newNote.text;
  note.type         = newNote.type;
  note.description  = newNote.description;;
  note.domain       = newNote.domain;

  notes.update(note);

  res.send(note)
});


app.delete('/note/:id', function (req, res) {
  const notes        = db.getCollection('notes');
  const noteToDelete = notes.get(req.params.id);
  console.log(`Deleting: ${req.params.id}`)
  console.log(noteToDelete);
  notes.remove(noteToDelete);
  res.send({});
});

app.get('/notes', function (req, res) {
  const notes       = db.getCollection('notes');

  var result = notes.find();
  res.send(result);
});

app.listen(8181, () => console.log('Bookmarks app listening on port 8181!'))
