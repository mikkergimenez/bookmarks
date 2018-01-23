export default class Text {
  constructor(note, viewType) {
    this.note   = note;
    this.viewType = viewType;
  }

  get title() {
    return this.note.text
  }

  get description() {
    return this.note.description
  }
}
