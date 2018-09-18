import { BaseNote } from './base';

export default class Text extends BaseNote {
  constructor(note, viewType) {
    super(note, viewType);
    this.note   = note;
    this.viewType = viewType;
  }

  get type() {
    return "text"
  }

  get title() {
    return this.note.text
  }

  get description() {
    return this.note.description
  }
}
