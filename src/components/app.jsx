import React, { Component } from 'react';
import Messages from './messages';

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
      text: false
    }
  }


  handleChangeText(event) {
    this.setState({text: event.target.value});
  }

  sendMessage() {
    //check for empty strings and return early if a message/author
    //isn't entered
    if (this.state.text === false) {
      alert('Invalid Submission');
      return;
    };

    let message = {
      text: this.state.text,
    };

    //the store method will take our new message and store it in our
    //Rethink collection
    things.store(message);
  }

  render() {
    return (
      <div>
        <center>
          <br />
          <br />
          <h1>Add a thing</h1>
          <br />
          <form>
            <input className="add-field" type="text" onChange={this.handleChangeText.bind(this)} placeholder="add a thing"></input>
            <input onClick={this.sendMessage.bind(this)} className="add-field-submit btn btn-primary" type="submit"></input>
          </form>
        </center>
        <Messages things={things}/>
      </div>
    )
  }

}

export default App;
