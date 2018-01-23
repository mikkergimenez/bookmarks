import Hipchat from './hipchat';
import Image from './image';
import RawText from './text';
import URL from './url';

export default function FormatterFactory() {
    this.createFormatter = function(type, note, viewType) {
      var retval = new RawText(note, viewType);

      if (type == 'hipchat') {
        retval = new Hipchat(note, viewType);
      }

      if (type == 'image') {
        retval = new Image(note, viewType);
      }

      if (type == 'url') {
        retval = new URL(note, viewType);
      }

      return retval
    }
}
