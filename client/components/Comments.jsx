import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Comments extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <section className="commentSection">
        <div id="circles">
          <h2>Comments</h2>
        </div>
        <div id="topicInput">
          <form method="POST" action='/topic' onSubmit={this.props.submitTopic}>
              <input name="username" type="text" placeholder="name" onChange={this.props.uponChange}></input>
              <input type='submit' value="submit"></input>
          </form>
        </div>
        <div id="resInput">

        </div>
        <div id="input">

        </div>
        <div id="label">

        </div>
      </section>
    )
  }
}

export default Comments;
