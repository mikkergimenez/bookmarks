import { BaseNote } from './base';


export default class Hipchat extends BaseNote {

  constructor(note, viewType) {
    super(note, viewType);
    this.note   = note;
    this.viewType = viewType;
  }

  get type() {
    return "hipchat"
  }

  get description() {
    var regex = /(\[[1-9][0-9]{0,1}\:[0-5][0-9]\ [AP]M\]) (.*?\: )/g;
    return this.note.description.replace(regex, "<br /><strong>$1</strong> <strong class=\"text-primary\">$2</strong>");
  }
}

// function text(note, viewType) {
//   if (viewType == "list") {
//     if (note.type == "hipchat") {
//       return { __html: note.text }
//     }
//     return { __html: this.getLink(note.text) }
//   }
//
//
//   if (note.text.endsWith(".png")) {
//     return { __html: `` };
//   }
//   return { __html: this.getLink(note.text) }
// }
//
// function title(note) {
//   return note.title;
// }
//
// function description(note) {
//   if (note.description && note.description.length > 0) {
//     var description = ""
//     if (this.props.msg.type == "hipchat") {
//       return (
//         <div>
//           <br />
//           <span dangerouslySetInnerHTML={{ __html: formattedHipchat(this.props.msg.description) }}></span>
//         </div>
//       );
//     }
//
//     return (
//       <div className="text-muted">
//         <br />
//         {description}
//       </div>
//     );
//   }
// }
