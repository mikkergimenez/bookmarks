var anchorme = require("anchorme").default;

import { BaseNote } from './base';

export default class URL extends BaseNote {
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

  get tags() {
    return this.note.tags;
  }

  get type() {
    return "url"
  }

  get title() {
    return this.note.text;
  }

  get description() {
    return this.getLink(this.note.description);
  }
}
