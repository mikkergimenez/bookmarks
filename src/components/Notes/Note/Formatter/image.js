var anchorme = require("anchorme").default;

import { BaseNote } from './base';

export default class Image extends BaseNote {

  constructor(note, viewType) {
    super(note, viewType);
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

  get type() {
    return "image"
  }

  get title() {
    return this.note.text;
  }

  get description() {
    return `<a class="list-image" href="${this.note.text}"><img width=100 src="${this.note.text}" width="100%"></a>`;
  }
}
