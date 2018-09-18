import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../actions/note'
import BookmarkComponent from './Component'

import { cacheNote, saveNote} from '../../actions/note'

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
  console.log("Bookmarks!");
  console.log(state.config);
  return {
    cachedNote: state.config.cachedNote || "",
    csrf: state.config.csrf
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleChangeText: (ev) => {
      dispatch(cacheNote(ev.currentTarget.value));
    },
    saveNote: (ev) => {
      ev.preventDefault();
      dispatch(saveNote(ev.currentTarget.elements[0].value, ev.currentTarget.elements[1].value));
    }
  }
}

const BookmarkField = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookmarkComponent)

export default BookmarkField
