import React, { Component } from 'react';

import axios                from 'axios';

import DomainList           from '../DomainList';
import SaveButton           from '../SaveButton';
import Notes                from '../Notes';
import BookmarkField        from '../BookmarkField';
import NoteField            from '../NoteField';

const AppComponent = ({ notes, inputType, viewType, filterType, setInputType, setFilter, setView }) => {

  var input, notesList, saveButton;

  if (inputType == "note") {
    // input = <div id="add-field-textarea" className="add-field add-field-textarea" type="text" onChange={handleChangeText.bind(this)} placeholder="add a thing"></div>
    input       = <NoteField />;
    saveButton  = <SaveButton />;
    notesList   = <div></div>;
  } else {
    input       = <BookmarkField />;
    saveButton  = <div></div>;
    notesList   = <Notes viewType={viewType} setInputType={setInputType} />
  }

  return (
    <div>
      <div className="header">
        <div className="container">
          <a onClick={() => setInputType("bookmark")} href="#/bookmark">bookmark</a> · <a onClick={() => setInputType("note")} href="#/note">note</a>
          <div className="pull-right">
            {saveButton}
          </div>
        </div>
      </div>
      <div className="container bookmark-field-container">
        {input}
      </div>
      <div className="bookmark-list">
        <div className="container">
          <center>
            <a onClick={() => setFilter("")} href="#">all</a> ·&nbsp;
            <a onClick={() => setFilter("url")} href="#">links</a> ·&nbsp;
            <a onClick={() => setFilter("hipchat")} href="#">hipchat</a> ·&nbsp;
            <a onClick={() => setFilter("image")} href="#">images</a> ·&nbsp;
            <a onClick={() => setFilter("trash")} href="#">trash</a>
            <br />
            <a onClick={() => setView("list")} href="#/list">list</a> · <a onClick={() => setView("gallery")} href="#/gallery">gallery</a>
          </center>
        </div>
      {notesList}
      </div>
    </div>
  )
}

export default AppComponent
