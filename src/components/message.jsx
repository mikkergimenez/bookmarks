import React, { Component } from 'react';

var anchorme = require("anchorme").default;

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  getLink(textStr) {
    return anchorme(textStr, {
      attributes:[
        {
           name:"target",
           value:"_blank"
        },
      ]
    });
  }

  messageText() {
    if (this.props.viewType == "list") {
      return { __html: this.getLink(this.props.msg.text) }
    }

    if (this.props.msg.text.endsWith(".png")) {
      return { __html: `<a href="${this.props.msg.text}"><img src="${this.props.msg.text}" width="100%"></a>` };
    }
    return { __html: this.getLink(this.props.msg.text) }
  }

  title() {
    return this.props.msg.title;
  }

  deleteMessage() {
    this.props.things.remove(this.props.msg)
  }

  description() {
    if (this.props.msg.description && this.props.msg.description.length > 0) {
      return (
        <div class="text-muted">
          <br />
          {this.props.msg.description}
        </div>
      );
    }
  }

  render() {
    if (this.props.viewType == "gallery") {
      return (
        <div className='col-3'>
          <span className='card'>
            <span className="card-body">
              <span className='float-right'><a onClick={this.deleteMessage.bind(this)} className="actions" href=""><i className="fa fa-times" aria-hidden="true"></i></a></span>
              <span dangerouslySetInnerHTML={this.messageText()}></span>
              <div><b>{this.title()}</b></div>
            </span>
          </span>
        </div>
      )
    }

    if (this.props.viewType == "list") {
      return (
        <div className='row'>
          <div className='col-8 offset-2 card'>
            <div className="card-body">
              <div><b>{this.title()}</b></div>
              <span dangerouslySetInnerHTML={this.messageText()}></span>
              {this.description()}
              <span className='float-right'><a onClick={this.deleteMessage.bind(this)} className="actions" href=""><i className="fa fa-times" aria-hidden="true"></i></a></span>
            </div>
          </div>
        </div>
      );
    }
  }
}
