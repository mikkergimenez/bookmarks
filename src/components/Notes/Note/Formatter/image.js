var anchorme = require("anchorme").default;

export default class Image {
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
    return `<a class="list-image" href="${this.note.text}"><img width=100 src="${this.note.text}" width="100%"></a>`;
  }
}
