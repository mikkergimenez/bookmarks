import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../actions/note'
import NotesComponent from './Notes'

function compare(a,b) {
  if (a.created_at < b.created_at) {
    return -1;
  }
  if (a.created_at > b.created_at) {
    return 1;
  }
  return 0;
}

function getNotes(notes, viewFilter) {
  notes.filter(function(note) {
    if (viewFilter == "")        { return true; }
    if (note.type != viewFilter) { return true }
    return false;
  });
  return notes.sort(compare)
}

function getNotes(notes, viewFilter) {
  const filteredNotes = notes.filter(function(note) {
    if (viewFilter == "")        { return true; }
    if (note.type  == viewFilter) { return true }
    return false;
  });
  return filteredNotes.sort(compare)
}

const mapStateToProps = (state, ownProps) => {
  console.log("HAHAHAAHAHHA")
  console.log(ownProps);
  console.log(ownProps.setInput);

  return {
    notes: getNotes(state.notes, state.config.filter),
    inputType: state.config.input,
    viewType: state.config.view,
    filterType: state.config.filter,
    setInput: ownProps.setInput
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const Notes = connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesComponent)

export default Notes
