const GalleryComponent = ({ title, text, description, viewType, editNote, deleteNote }) => (
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
);

export default GalleryComponent;
