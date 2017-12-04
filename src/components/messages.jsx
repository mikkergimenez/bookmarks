import React, { Component } from 'react';
import Message from './message';

class Messages extends Component {
  constructor(props) {
  super(props);

  this.things = props.things;

  this.state = {
    convo: []
  };
  // this.state = {
  //     convo: [{text: 'http://garylarizza.com/', title: "Shit Gary Says", type: 'bookmark'},
  //             {text: 'https://themes.getbootstrap.com/products/application', title: "Shit Gary Says 2", type: 'bookmark'},
  //             {text: 'http://garylarizza.com/', title: "Shit Gary Says 3", type: 'bookmark'},
  //             {text: 'http://garylarizza.com/', title: "Shit Gary Says 4", type: 'bookmark'}]
  //    };
  }

  componentDidMount() {
    this.things.watch().subscribe(
      (messages) => {
         let convo = messages.map(function(message) {
                                    return message
                     });
         this.setState({convo: convo});
      },
      (err) => {
        console.log(err);
      }
    );
  }

  render() {
    var _this = this;
    let msgsjsx = this.state.convo.map(function(message, i){
      return <Message viewType={_this.props.viewType} things={_this.props.things} msg={message} key={i} />
    });

    if (this.props.viewType == "gallery") {
      return (<div className="container-fluid">
      <div className="row">
        <span className="col-2"></span><span className="col-8"><div className='row'>{msgsjsx}</div></span><span className="col-2"></span></div>
      </div>);

    }
    return (<div className='container-fluid'>{msgsjsx}</div> );
  }
}
export default Messages;
