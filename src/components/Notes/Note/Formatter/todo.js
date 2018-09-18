var anchorme = require("anchorme").default;

import { BaseNote } from './base';

export default class Todo extends BaseNote {
  constructor(note, viewType) {
    super(note, viewType);
    this.note   = note;
    this.viewType = viewType;
  }

  get tags() {
    return this.note.tags;
  }

  get title() {
    return null;
  }

  get type() {
    return "todo"
  }

  get description() {

    return `<div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">${this.note.text}</label>
      </div>`;
  }
}
