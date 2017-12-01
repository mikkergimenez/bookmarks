import React, { Component } from 'react';

import Messages from './messages';

class App extends Component {
  render() {
    return (
      <div>
        <center>
          <h1>Add a thing</h1>
          <br />
          <form>
            <input className="add-field" type="text"></input>
            <input className="btn btn-primary" type="submit"></input>
          </form>
        </center>
        <Messages />
      </div>
    )
  }

}

export default App;
