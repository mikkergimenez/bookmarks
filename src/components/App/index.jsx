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

// function compare(a,b) {
//   if (a.created_at < b.created_at) {
//     return -1;
//   }
//   if (a.created_at > b.created_at) {
//     return 1;
//   }
//   return 0;
// }

const mapStateToProps = (state, ownProps) => {
  return {
    inputType: state.config.input,
    viewType: state.config.view,
    filterType: state.config.filter,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setInput: (input, obj) => {
      console.log("Setting Input to " + input)
      console.log("Setting Obj to " + obj)
      obj = obj || null;
      dispatch(setInput(input, obj))
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
