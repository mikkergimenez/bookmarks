var initialState = {
  filter: "",
  input: "bookmark",
  view: "list",
}

var configReducer = function (state = initialState, action) {
  switch (action.type) {
    case 'CACHE_NOTE':
      return Object.assign({}, state, {
        cachedNote: action.text
      });
    case 'SAVE_NOTE':
      return Object.assign({}, state, {
        cachedNote: ""
      });
    case 'SET_INPUT':
      console.log("Setting Input to " + action.filter);
      return Object.assign({}, state, {
        input: action.input
      });
    case 'SET_FILTER':
      console.log("Setting Filter to " + action.filter);
      return Object.assign({}, state, {
        filter: action.filter
      });
    case 'RECEIVE_FULL_NOTE':
      return Object.assign({}, state, {
        cachedNote: action.note.text,
        currentID: action.note.$loki
      });
    case 'SET_VIEW':
      console.log("Setting View to " + action.filter);
      return Object.assign({}, state, {
        view: action.view
      });

    default:
      return state
  }
}

export default configReducer
