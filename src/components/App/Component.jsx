import React, { Component } from 'react';

import axios                from 'axios';

import DomainList           from '../DomainList';
import SaveButton           from '../SaveButton';
import Notes                from '../Notes';
import BookmarkField        from '../BookmarkField';
import NoteField            from '../NoteField';

const AppComponent = ({ notes, inputType, viewType, filterType, setInput, setFilter, setView }) => {

  var input, notesList, saveButton;

  if (inputType == "note") {
    // input = <div id="add-field-textarea" className="add-field add-field-textarea" type="text" onChange={handleChangeText.bind(this)} placeholder="add a thing"></div>
    input       = <NoteField />;
    saveButton  = <SaveButton />;
    notesList   = <div></div>;
  } else {
    input       = <BookmarkField />;
    saveButton  = <div></div>;
    notesList   = <Notes viewType={viewType} />
  }

  return (
    <div>
      <div className="header">
        <div className="container">
          <a onClick={() => setInput("bookmark")} href="#/bookmark">bookmark</a> · <a onClick={() => setInput("note")} href="#/note">note</a>
          <div className="pull-right">
            {saveButton}
          </div>
        </div>
      </div>
      <center>
        {input}
        <div className="container">
          <a onClick={() => setFilter("url")} href="#">links</a> ·&nbsp;
          <a onClick={() => setFilter("hipchat")} href="#">hipchat</a> ·&nbsp;
          <a onClick={() => setFilter("image")} href="#">images</a>
          <br />
          <a onClick={() => setView("list")} href="#/list">list</a> · <a onClick={() => setView("gallery")} href="#/gallery">gallery</a>
        </div>
      </center>
      <DomainList />
      {notesList}
    </div>
  )
}

export default AppComponent
