var root = document.getElementById('reactjs-root');

var initialState = {
  filter: "",
  input: "bookmark",
  view: "list",
  csrf: root.dataset.csrf,
}

var configReducer = function (state = initialState, action) {
  switch (action.type) {
    case 'CACHE_NOTE':
      return Object.assign({}, state, {
        cachedNote: action.text
      });
    case 'SET_CSRF':
      return Object.assign({}, state, {
        csrf: action.csrf
      });
    case 'SAVE_NOTE':
      return Object.assign({}, state, {
        cachedNote: ""
      });
    case 'SET_INPUT':
      return Object.assign({}, state, {
        input: action.input,
        cachedTitle: action.noteObj.title,
        cachedNote: action.noteObj.description.__html,
        currentID: action.noteObj.id
      });
    case 'SET_FILTER':
      return Object.assign({}, state, {
        filter: action.filter
      });
    case 'RECEIVE_FULL_NOTE':
      console.log("Receiving Full Note with Object: ")
      console.log(action.note);
      return Object.assign({}, state, {
        cachedNote: action.note.text,
        currentID: action.note._id
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
