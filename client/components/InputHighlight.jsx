import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import arrowup from '../assets/arrowup.png';
import arrowdown from '../assets/arrowdown.png';


class InputHighlight extends Component {
  constructor(props) {
    super(props)
    this.state = {
      upvote: this.props.upvote,
    }

    this.upvote = this.upvote.bind(this);
  }

  upvote (ver, text) {
    this.props.rerenderParentCallback();
    this.setState({upvote : this.state.upvote+1})
    fetch('/upvote', {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        version : ver,
        text: text,
      }),
    })    // .then(res => res.json())
      // .then(json => console.log(json));  
  }

  // downvote() {
  //   onClick={downvote}
  // }

  render () {
    return (
      <div className="inputHighlight">
        <h5>   {this.state.upvote}   </h5>
        <button onClick={() => this.upvote(this.props.ver, this.props.text)}><img src={arrowup} width="25" height="25" /></button>
        <button ><img src={arrowdown} width="25" height="25" /></button>
        <span>
          <h5>    {this.props.name}</h5>
          <h4>{this.props.text}</h4>
        </span>
      </div>
    )
  }
}


export default InputHighlight;
