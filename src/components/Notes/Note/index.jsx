import { connect }              from 'react-redux';
import { setVisibilityFilter, deleteNote, editNote }  from '../../../actions/note';

import Hipchat                  from './Formatter/hipchat';
import FormatterFactory         from './Formatter';

import NoteComponent            from './Component';

const mapStateToProps = (state, ownProps) => {
  var type = ownProps.note.type || "text";
  var factory = new FormatterFactory();

  var formatter = factory.createFormatter(type, ownProps.note, ownProps.viewType)

  return {
    text: { __html: formatter.text },
    title: formatter.title,
    description: { __html: formatter.description },
    viewType: ownProps.viewType
  }

}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    editNote: () => {
      editNote(ownProps.note.$loki)
    },
    deleteNote: (ev) => {
      ev.preventDefault();
      dispatch(deleteNote(ownProps.note.$loki));
    }
  }
}

const Note = connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteComponent)

export default Note
