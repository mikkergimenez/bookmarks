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

  render() {
    return (
      <div className='row'>
        <div className='col-8 offset-2 card'>
          <div class="card-body">
            <div className='col-xs-2 center'>{this.props.msg.author}</div>
            <div className='col-xs-10 center' dangerouslySetInnerHTML={this.messageText()}></div>
          </div>
        </div>
      </div>
    );
  }
}
