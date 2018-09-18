import React, { Component } from 'react';

import ReactQuill from 'react-quill';

const NoteFieldComponent = ({ currentID, cachedNote, handleChangeText }) => (
  <div>
    Has ID: {currentID}
    <ReactQuill value={cachedNote} onChange={handleChangeText} />
  </div>
);

export default NoteFieldComponent

// <div id="add-field-textarea" className="add-field-textarea" type="text" onChange={this.props.handleChangeText} placeholder="add a thing"></div>
