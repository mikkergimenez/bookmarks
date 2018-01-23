import React, { Component } from 'react';
import Note from './Note';

const NotesComponent = ({ notes, viewType }) => {
  let msgsjsx = notes.map(function(note, i){
    return <Note viewType={viewType} note={note} key={i} />
  });

  if (viewType == "gallery") {
    return (
      <div className="row">
        <span className="col-2"></span>
        <span className="col-8">
          <div className='row'>{msgsjsx}</div>
        </span>
        <span className="col-2"></span>
      </div>
    );
  }

  return (<div className='container-fluid'>{msgsjsx}</div> );
}
export default NotesComponent;
