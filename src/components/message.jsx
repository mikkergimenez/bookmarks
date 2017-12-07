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

  formattedHipchat(string) {
  var regex = /(\[[1-9][0-9]{0,1}\:[0-5][0-9]\ [AP]M\]) (.*?\: )/g;

  var newString = string.replace(regex, "<br /><strong>$1</strong> <strong class=\"text-primary\">$2</strong>");

  return "<span class=\"text-muted\">Hipchat Conversation</span>"+newString;
  }

  isHipchat(string) {
    return /^\[[1-9][0-9]{0,1}\:[0-5][0-9]\ [AP]M\]/.test(string);
  }

  messageText() {
    if (this.props.viewType == "list") {
      if (this.isHipchat(this.props.msg.text)) {
        console.log("Is Hipchat");
        return { __html: this.formattedHipchat(this.props.msg.text) }
      }
      console.log("Is Not Hipchat");
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

  updateMessage() {

  }

  description() {
    if (this.props.msg.description && this.props.msg.description.length > 0) {
      return (
        <div className="text-muted">
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
              <span className='float-right'><a onClick={this.updateMessage.bind(this)} className="actions" href=""><i className="fa fa-refresh" aria-hidden="true"></i></a></span>
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
