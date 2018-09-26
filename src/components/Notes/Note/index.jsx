import { connect }              from 'react-redux';
import {
  setVisibilityFilter,
  deleteNote,
  editNote
}                               from '../../../actions/note';

import Hipchat                  from './Formatter/hipchat';
import FormatterFactory         from './Formatter';

import NoteComponent            from './Component';

const mapStateToProps = (state, ownProps) => {
  var type = ownProps.note.type || "text";
  var factory = new FormatterFactory();

  var formatter = factory.createFormatter(type, ownProps.note, ownProps.viewType)
  return {
    tags: formatter.tags,
    text: { __html: formatter.text },
    type: formatter.type,
    title: formatter.title,
    domain: ownProps.note.domain,
    description: { __html: formatter.description },
    setInput: ownProps.setInput,
    viewType: ownProps.viewType
  }

}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveNote: (title, description) => {
      dispatch(editNote(ownProps.note._id, title, description));
    },
    deleteNote: (ev) => {
      ev.preventDefault();
      dispatch(deleteNote(ownProps.note._id));
    }
  }
}

const Note = connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteComponent)

export default Note
