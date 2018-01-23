var anchorme = require("anchorme").default;

export default class URL {
  constructor(note, viewType) {
    console.log(note);
    this.note   = note;
    this.viewType = viewType;
  }

  getLink(textStr) {
    return anchorme(textStr, {
      attributes:[
        {
           name:"target",
           value:"_blank"
        },
      ]
    });
  }


  get title() {
    return this.note.text;
  }

  get description() {
    return this.getLink(this.note.description);
  }
}
