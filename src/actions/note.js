import axios from 'axios';

const SAVE_NOTE  = 'SAVE_NOTE';
const CACHE_NOTE = 'CACHE_NOTE';

export const PUT_NOTE = 'PUT_NOTE'
function putNote(text) {
  return {
    type: PUT_NOTE,
    text
  }
}

export const EDIT_NOTE = 'EDIT_NOTE'
function editNote(text) {
  return {
    type: EDIT_NOTE,
    note_id
  }
}

export const TRY_DELETE_NOTE = 'TRY_DELETE_NOTE'
function tryDeleteNote(note_id) {
  return {
    type: TRY_DELETE_NOTE,
    note_id
  }
}

export const REMOVE_NOTE = 'REMOVE_NOTE'
function removeNote(note_id) {
  return {
    type: REMOVE_NOTE,
    note_id
  }
}

export const DELETE_NOTE = 'DELETE_NOTE'
export function deleteNote(note_id) {
  console.log(note_id);
  return dispatch => {
    return axios.delete(`/note/${note_id}`, {
      id: note_id
    })
    .then(function(response) {
      return response.data; // Should return deleted ID
    })
    .then(function(json) {
      dispatch(removeNote(note_id))
    });
  }
  // return {
  //   type: DELETE_NOTE,
  //   note_id
  // }
}

export const RECEIVE_NOTES = 'RECEIVE_NOTES'
function receiveNotes(json) {
  return {
    type: RECEIVE_NOTES,
    notes: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export const RECEIVE_NOTE = 'RECEIVE_NOTE'
function receiveNote(json) {
  console.log("Running Receive Note");
  return {
    type: RECEIVE_NOTE,
    note: json,
    receivedAt: Date.now()
  }
}

export const RECEIVE_FULL_NOTE = 'RECEIVE_FULL_NOTE'
function receiveFullNote(json) {
  return {
    type: RECEIVE_FULL_NOTE,
    note: json,
    receivedAt: Date.now()
  }
}

export function saveFullNote(text, id) {
  return dispatch => {
    dispatch(putNote(text))
    if (id == undefined) {
      return axios.post('/note', {
        text: text
      })
      .then(function(response) {
        return response.data;
      })
      .then(function(json) {
        dispatch(receiveFullNote(json))
      });
    } else {
      return axios.put(`/note/${id}`, {
        text: text
      })
      .then(function(response) {
        return response.data;
      })
      .then(function(json) {
        dispatch(receiveFullNote(json))
      });

    }
  }
  return {
    type: SAVE_FULL_NOTE,
    id,
    text
  }
}


export function saveNote(text) {
  return dispatch => {
    dispatch(putNote(text))
    return axios.post('/note', {
      text: text
    })
    .then(function(response) {
      return response.data;
    })
    .then(function(json) {
      dispatch(receiveNote(json))
    });
  }
  return {
    type: SAVE_NOTE,
    text
  }
}

export function cacheNote(text) {
  return {
    type: CACHE_NOTE,
    text
  }
}
