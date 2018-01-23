import React from 'react';

const NoteComponent = ({ title, text, description, viewType, editNote, deleteNote }) => {
  if (viewType == "gallery") {
    return (
      <div className='col-3'>
        <span className='card'>
          <span className="card-body">
            <span className='float-right'><a onClick={deleteNote} className="actions" href="">
              <i className="fa fa-times" aria-hidden="true"></i></a>
            </span>
            <span className='float-right'><a onClick={editNote} className="actions" href="">
              <i className="fa fa-refresh" aria-hidden="true"></i></a>
            </span>
            <span dangerouslySetInnerHTML={text}></span>
            <img src={title} />
            <div><b>{title}</b></div>
          </span>
        </span>
      </div>
    )
  }

  if (viewType == "list") {
    return (
      <div className='row'>
        <div className='col-8 offset-2 card'>
          <div className="card-body">
            <div><b>{title}</b></div>
            <div>
              <span dangerouslySetInnerHTML={description}></span>
            </div>
            <div className='icon-set float-right'>
              <span><a onClick={editNote} className="actions" href=""><i className="fa fa-edit" aria-hidden="true"></i></a></span>
              <span><a onClick={deleteNote} className="actions" href=""><i className="fa fa-times" aria-hidden="true"></i></a></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NoteComponent;
