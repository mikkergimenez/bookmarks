const SET_VIEW    = 'SET_VIEW';
const SET_INPUT   = 'SET_INPUT';
const SET_FILTER  = 'SET_FILTER';

export function setInput(input) {
  return {
    type: SET_INPUT,
    input
  }
}

export function setFilter(filter) {
  return {
    type: SET_FILTER,
    filter
  }
}

export function setView(view) {
  return {
    type: SET_VIEW,
    view
  }
}
