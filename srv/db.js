const loki    = require('lokijs');

const db = new loki('quickstart.db', {
    autoload: true,
    autoloadCallback : databaseInitialize,
    autosave: true,
    autosaveInterval: 4000
});

// implement the autoloadback referenced in loki constructor
function databaseInitialize() {
  var notes = db.getCollection("notes");
  if (notes === null) {
    notes = db.addCollection("notes");
    notes.insert({
      text: 'One',
      description: 'Your First Note',
    });

  }

  // kick off any program logic or start listening to external events
  runProgramLogic();
}

// example method with any bootstrap logic to run after database initialized
function runProgramLogic() {
  var entryCount = db.getCollection("notes").count();
  console.log("number of entries in database : " + entryCount);
}

module.exports = db;
