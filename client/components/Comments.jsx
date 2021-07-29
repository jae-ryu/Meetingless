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
          <h2>Commentssssss</h2>
        </div>
        <div id="topicInput">
          <form method="POST" action='/topic' onSubmit={this.props.submitTopic}>
              <input id= "nameInput" ref={(ref) => {this.topic = ref}} name="num" type="text" placeholder="ver" onChange={this.props.uponChange}></input>
              <input ref={(ref) => {this.topic = ref}} name="topic" type="text" placeholder="Enter topic" onChange={this.props.uponChange}></input>
              <input type='submit' value="submit"></input>
          </form>
        </div>
        <div id="res">

        </div>
        <div id="resInput">
          <form method="POST" action='/input' onSubmit={this.props.submitTopic}>
              <input id= "nameInput" ref={(ref) => {this.topic = ref}} name="name" type="text" placeholder="Name" onChange={this.props.uponChange}></input>
              <input id= "verInput" ref={(ref) => {this.topic = ref}} name="num" type="text" placeholder="ver" onChange={this.props.uponChange}></input>
              <input ref={(ref) => {this.topic = ref}} name="input" type="text" placeholder="Enter response" onChange={this.props.uponChange}></input>
              <input type='submit' value="submit"></input>
          </form>
        </div>
        <div id="label">

        </div>
      </section>
    )
  }
}

export default Comments;
