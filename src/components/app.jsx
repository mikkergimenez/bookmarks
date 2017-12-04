import React, { Component } from 'react';
import Messages from './messages';

import axios from 'axios';

const Horizon = require("@horizon/client");
const horizon = Horizon({ secure: false });
//this initiates our 'messages' collection inside of our Rethinkdb
const things = horizon('things');

class App extends Component {

  //init our state with the built in constructor function
  constructor(props) {
    super(props);
    this.state = {
      author: false,
      text: false,
      viewType: "list",
    }

    this.getTitle = this.getTitle.bind(this);
  }

  getTitle(string, callback) {
    var _this = this;
    if (string.startsWith("http://") || string.startsWith("https://")) {
      console.log("Getting Title for " + string)
      axios.get(`https://api.urlmeta.org/?url=${string}`)
      .then(function (response) {
        _this.setState({
          title: response.data.meta.title,
          image: response.data.meta.image,
          description: response.data.meta.description
        })
        callback();
      })
      .catch(function (error) {
        callback("");
      });
    } else {
      console.log("Ignoring...");
      callback("");
    }
  }

  handleChangeText(ev) {
    ev.preventDefault();
    this.setState({
      text: ev.target.value,
    });
  }

  sendMessage() {
    //check for empty strings and return early if a message/author
    //isn't entered
    if (this.state.text === false) {
      alert('Invalid Submission');
      return;
    };

    var _this = this;
    this.getTitle(this.state.text, function() {
      let message = {
        text: _this.state.text,
        title: _this.state.title,
        image: _this.state.image,
        description: _this.state.description,
        type: _this.state.type,
      };
      console.log("Storing ")
      console.log(message);
      //the store method will take our new message and store it in our
      //Rethink collection
      things.store(message);
    });
  }

  setView(viewType) {
    this.setState({
      viewType: viewType
    });
  }

  render() {
    return (
      <div>
        <center>
          <br />
          <br />
          <br />
          <input className="add-field" type="text" onChange={this.handleChangeText.bind(this)} placeholder="add a thing"></input>
          <button onClick={this.sendMessage.bind(this)} className="add-field-submit btn btn-primary">Submit</button>
          <br />
          <a href="#links">links</a> · <a href="#notes">notes</a>
          <br />
          <a onClick={() => this.setView("list")} href="#">list</a> · <a onClick={() => this.setView("gallery")} href="#">gallery</a>
        </center>
        <Messages things={things} viewType={this.state.viewType}/>
      </div>
    )
  }

}

export default App;
