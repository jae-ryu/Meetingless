import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class InputHighlight extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="inputHighlight">
        <h5>{this.props.name}</h5>
        <h5>Upvote : {this.props.upvote}</h5>
        <h3>{this.props.text}</h3>
      </div>
    )
  }
}

export default InputHighlight;
