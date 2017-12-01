import React, { Component } from 'react';

var anchorme = require("anchorme").default;

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  messageText() {
    return { __html: anchorme(this.props.msg.text) };
  }

  title() {
    return ""
  }

  deleteMessage() {
    this.props.things.remove(this.props.msg)
  }

  render() {
    return (
      <div className='row'>
        <div className='col-8 offset-2 card'>
          <div className="card-body">
            <span>{this.title()}</span>
            <span dangerouslySetInnerHTML={this.messageText()}></span>
            <span className='float-right'><a onClick={this.deleteMessage.bind(this)} className="actions" href=""><i className="fa fa-times" aria-hidden="true"></i></a></span>
          </div>
        </div>
      </div>
    );
  }
}
