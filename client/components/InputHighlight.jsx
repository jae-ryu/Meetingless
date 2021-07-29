import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import arrowup from '../assets/arrowup.png';
import arrowdown from '../assets/arrowdown.png';


class InputHighlight extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="inputHighlight">
        <h5>   {this.props.upvote}   </h5>
        <button><img src={arrowup} width="25" height="25" /></button>
        <button><img src={arrowdown} width="25" height="25" /></button>
        <span>
          <h5>    {this.props.name}</h5>
          <h4>{this.props.text}</h4>
        </span>
      </div>
    )
  }
}


export default InputHighlight;
