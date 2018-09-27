import React, { Component } from 'react';
import TagList from './TagList';

class ListStyle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:           this.props.id,
      description:  this.props.description.__html,
      editing:      false,
      title:        this.props.title,
    };

    this.closeEdit    = this.closeEdit.bind(this);
    this.editNote     = this.editNote.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  editNote(ev) {
    ev.preventDefault();
    this.setState({
      editing: true,
    });
  }

  closeEdit(ev) {
    ev.preventDefault();
    this.setState({
      editing: false,
    });
  }

  handleTitleChange() {
    this.setState({
      title: this.refs.searchStringInput.value,
    });
  }

  handleChange() {
    this.setState({
      description: this.refs.searchStringInput.value,
    });
  }

  saveNote(ev) {
    ev.preventDefault();
    this.props.saveNote(this.state.title, this.state.description);
  }

  render() {
    var editDeleteButtons, tandDField;

    if (this.state.editing) {
      tandDField = (
        <form>
          <b><input onChange={this.handleTitleChange} className="add-field title-field" value={this.state.title} /></b>
          <input type="text" onChange={this.handleChange} className="add-field" value={this.state.description} ref="searchStringInput" />
          <input type="submit" onClick={this.saveNote} className="add-field-submit btn btn-primary" />
        </form>
      );
    } else {
      var title = ""
      var description = ""
      if (this.state.title != this.props.description.__html) {
        title = <div className="bookmark-title"><b>{this.state.title}</b><a className="domain-muted" href={"/notes/domain/" + this.props.domain}>{this.props.domain}</a></div>;
        description = <div><span dangerouslySetInnerHTML={this.props.description}></span></div>;
      } else {
        title = ""
        description = <div><span dangerouslySetInnerHTML={this.props.description}></span><a className="domain-muted" href={"/notes/domain/" + this.props.domain}>{this.props.domain}</a></div>;
      }
      console.log()

      tandDField = (
        <div>
          {title}
          {description}
        </div>);
    }

    if (this.state.editing) {
      editDeleteButtons = (
        <div>
          <span><a data-toggle="tooltip" title="Hooray!" onClick={(ev) => this.props.setInputType(ev, "note", this.props)} href={"#/bookmark/" + this.state._id} className="actions" href=""><i className="fa fa-file" aria-hidden="true"></i></a></span>
          <span><a data-toggle="tooltip" title="Hooray!" onClick={this.closeEdit} className="actions" href=""><i className="fa fa-times" aria-hidden="true"></i></a></span>
        </div>
      );
    } else {
      editDeleteButtons = (
        <div>
          <span><a data-toggle="tooltip" title="Hooray!" onClick={this.editNote} className="actions" href=""><i className="fa fa-edit" aria-hidden="true"></i></a></span>
          <span><a data-toggle="tooltip" title="Hooray!" onClick={this.props.deleteNote} className="actions" href=""><i className="fa fa-trash" aria-hidden="true"></i></a></span>
        </div>
      );
    }


    return (<div className='row'>
      <div className='col-8 offset-2 card'>
        <div className="card-body">
          {tandDField}
        </div>
        <div>
            <TagList tags={this.props.tags} />
        </div>
        <div className='icon-set float-right'>
          <div>
            {editDeleteButtons}
          </div>
          <div>
            <span className="text-warning">{this.props.type}</span>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default ListStyle
