var NotesReducer = function (state = [], action) {
  switch (action.type) {
    case 'SAVE_NOTE':
      return state
    case 'RECEIVE_NOTE':
      if ((action.note.text) && (action.note.description)) {
        state.push(action.note);
      }
      return Object.assign([], state);
    case 'REMOVE_NOTE':
      var newState = [];
      for (var i = 0; i < state.length; i++) {
        console.log(i);
        console.log(state[i]);
        if (state[i].$loki != action.note_id) {
          newState.push(state[i]);
        }
      }
      return Object.assign([], newState);
    default:
      return state
  }
}

export default NotesReducer
