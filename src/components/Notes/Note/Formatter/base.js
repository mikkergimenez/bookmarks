export class BaseNote {
  constructor(note, viewType) {
    return "blessed"
  }

  get tags() {
    return this.note.tags;
  }

  get title() {
    return this.note.text;
  }
}
