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
          <form method="POST" action='/login' >
              <input name="username" type="text" placeholder="name" ></input>
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
