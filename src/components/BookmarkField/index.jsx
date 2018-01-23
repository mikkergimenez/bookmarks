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
  return {
    cachedNote: state.config.cachedNote || ""
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleChangeText: (ev) => {
      dispatch(cacheNote(ev.currentTarget.value));
    },
    saveNote: (ev) => {
      ev.preventDefault();
      dispatch(saveNote(ev.currentTarget.elements[0].value));
    }
  }
}

const BookmarkField = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookmarkComponent)

export default BookmarkField
