const ListComponent = ({ title, text, description, viewType, editNote, deleteNote }) => (
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

export default ListComponent;
