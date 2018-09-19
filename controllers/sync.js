const Note     = require('../models/Note');


/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('sync', {
    title: 'Home',
    csrf: res.locals._csrf
  });
};

exports.sync = (req, res) => {
  var fs = require('fs');

  if (!fs.existsSync("backup")){
      fs.mkdirSync("backup");
  }
  if (!fs.existsSync("backup/archived")){
      fs.mkdirSync("backup/archived");
  }


  Note.find(function (err, notes) {
    notes.forEach(function(note) {
      console.log(note);

      var content = ""
      content += "---\n"
      content += `id: ${note._id}\n`;
      content += `tags: ${note.tags.join(",")}\n`;
      content += `archived: ${note.archived}\n`;
      content += `title: ${note.text}\n`;
      content += `type: ${note.type}\n`;
      content += `domain: ${note.domain}\n`;
      content += `createdAt: ${note.createdAt}\n`;
      content += `updatedAt: ${note.updatedAt}\n`;
      content += "---\n"
      content += note.description

      if (note.archived) {
        fileName = `backup/archived/${note.text.replace("/", "_")}.md`;
      } else {
        fileName = `backup/${note.text.replace("/", "_")}.md`;
      }
      fs.writeFile(fileName, content, function(err) {
          if(err) {
              return console.log(err);
          }

          console.log("The file was saved!");
      });

      console.log("--------")
      console.log(note);

    });
    res.send("Done");
  });

}
