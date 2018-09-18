import { connect }                      from 'react-redux'
import { setVisibilityFilter }          from '../../actions/note'
import AppComponent                     from './Component'

import { setInput, setFilter, setView } from '../../actions/index';

//init our state with the built in constructor function

function handleChangeText(ev) {
  console.log("HAHAHA");
  ev.preventDefault();
  this.setState({
    text: ev.target.value,
  });
}

// function setInput(inputType) {
//   var _this = this;
//   this.setState({
//     inputType: inputType
//   }, function() {
//     if (inputType == "note") {
//       var options = {
//         placeholder: 'Note Here',
//         readOnly: false,
//         theme: 'snow'
//       };
//
//       var container = document.getElementById('add-field-textarea');
//       var editor = new Quill(container, options);
//
//       editor.on('text-change', function(delta, oldDelta, source) {
//         _this.handleNoteChangeText();
//         // if (source == 'api') {
//         //
//         // } else if (source == 'user') {
//         //   console.log("A user action triggered this change.");
//         // }
//       });
//     }
//   });
//
// }


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
    inputType: state.config.input,
    viewType: state.config.view,
    filterType: state.config.filter,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setInput: (input) => {
      dispatch(setInput(input))
    },
    setFilter: (filterVal) => {
      dispatch(setFilter(filterVal))
    },
    setView: (view) => {
      dispatch(setView(view))
    }
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)

export default App
