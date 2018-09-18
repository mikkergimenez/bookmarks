import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../actions/note'
import BookmarkComponent from './Component'

import { saveFullNote } from '../../actions/note'

function compare(a,b) {
  if (a.created_at < b.created_at) {
    return -1;
  }
  if (a.created_at > b.created_at) {
    return 1;
  }
  return 0;
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentID: state.config.currentID,
    cachedNote: state.config.cachedNote || ""
  }
}

function doSaveFullNote(newValue) {
    return (dispatch, getState) => {
        let state = getState();
        console.log(state);
        dispatch(saveFullNote(newValue, state.config.currentID));
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleChangeText: (ev) => {
      console.log(ev);
      dispatch(doSaveFullNote(ev))
    },
    saveNote: (ev) => {
      ev.preventDefault();
      dispatch(saveFullNote(ev, state.config.currentID));
    }
  }
}

const BookmarkField = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookmarkComponent)

export default BookmarkField
