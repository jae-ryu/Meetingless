import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopicHighlight extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="topicHighlight">
        <h4>Topic For Discussion</h4>
        <h2>{this.props.text}</h2>
      </div>
    )
  }
}

export default TopicHighlight;
