import React, { Component } from 'react';

const BookmarkComponent = ({ cachedNote, handleChangeText, saveNote }) => (
  <span>
    <form onSubmit={saveNote}>
      <input className="add-field" onChange={handleChangeText} placeholder="add a thing" value={cachedNote}></input>
      <input type="submit" className="add-field-submit btn btn-primary" />
    </form>
  </span>
);

export default BookmarkComponent
