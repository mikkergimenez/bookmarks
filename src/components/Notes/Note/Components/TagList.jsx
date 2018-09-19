import React, { Component } from 'react';

class TagList extends Component {
  constructor(props) {
    super(props);
    this.state = { editing: false };
  }

  render() {
    return (
      <span className="text-success">
      {this.props.tags.map(function(tag, i){
        return <a href={"/#/tags/" + tag} key={i}>{tag}</a>
      })}
      </span>
    );
  }
}

export default TagList;
