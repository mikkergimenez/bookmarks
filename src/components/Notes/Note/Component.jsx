import React from 'react';

const NoteComponent = ({ editing, tags, text, title, type, description, domain, viewType, editNote, deleteNote }) => {
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
            <div>
              <span className="text-success">{tags}</span>
            </div>
          </span>
        </span>
      </div>
    )
  }

  if (editing) {
    const TandDField = <form><input class="add-field" placeholder="add a thing" value="{title}"><input class="add-field" placeholder="add a thing" value="{description}"><input type="hidden" name="_csrf" value="qxRhPiUchjcnYDHV510AFwqsZgk/qLRZuiCT4=" /><input type="submit" class="add-field-submit btn btn-primary" /></form>;
  } else {
    const titleField = <div className="bookmark-title"><b>{title}</b><a className="domain-muted" href={"/notes/domain/" + domain}>{domain}</a></div><div><span dangerouslySetInnerHTML={description}></span></div>
  }

  if (viewType == "list") {
    return (
      <div className='row'>
        <div className='col-8 offset-2 card'>
          <div className="card-body">
              {titleField}
              {descriptionField}
            </div>
            <div>
              <span className="text-success">
                {tags.map(function(tag, i){
                  return <a href={"/#/tags/" + tag} key={i}>{tag}</a>
                })}
              </span>
            </div>
            <div className='icon-set float-right'>
              <div>
                <span><a onClick={editNote} className="actions" href=""><i className="fa fa-edit" aria-hidden="true"></i></a></span>
                <span><a onClick={deleteNote} className="actions" href=""><i className="fa fa-times" aria-hidden="true"></i></a></span>
              </div>
              <div>
                <span className="text-warning">{type}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NoteComponent;
