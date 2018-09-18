const SET_VIEW    = 'SET_VIEW';
const SET_INPUT   = 'SET_INPUT';
const SET_FILTER  = 'SET_FILTER';
const SET_CSRF    = 'SET_CSRF';

export function setCSRF(csrf) {
  return {
    type: SET_CSRF,
    csrf
  }
}

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
