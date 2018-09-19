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
  Note.find(function (err, notes) {
    notes.forEach(function(note) {
      var fs = require('fs');

      fs.writeFile("backup/test_file", "Hey there!", function(err) {
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
