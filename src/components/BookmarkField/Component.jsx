import React, { Component } from 'react';

const BookmarkComponent = ({ cachedNote, handleChangeText, saveNote, csrf }) => (
  <div>
    <form onSubmit={saveNote}>
      <input className="add-field" onChange={handleChangeText} placeholder="add a thing" value={cachedNote}></input>
      <input type="hidden" name="_csrf" value={csrf} />
      <input type="submit" className="add-field-submit btn btn-primary" />
    </form>
  </div>
);

export default BookmarkComponent
