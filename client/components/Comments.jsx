import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TopicHighlight from './TopicHighlight.jsx';
import InputHighlight from './InputHighlight.jsx';


class Comments extends Component {
  constructor() {
    super();
    // this.state = {
    //   topics: [],
    //   messages1: [],
    // };
    this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
  }

  rerenderParentCallback() {
    this.forceUpdate();
  }

  render () {
    
    console.log('-----latest state topics below-----');
    console.log(this.props.topics);
    console.log('-----latest state messages below-----');
    console.log(this.props.messages1);

    const topics = this.props.topics;

    const topic1 = topics.map((el, i) => {
      return (
        <TopicHighlight
          text={el.topic}
          key={i}
        />
      );
    })

    const messages1 = this.props.messages1;

// sort the arrays, pass in a compare function

    const firstMessages = messages1.map((el, i) => {
      return (
        <InputHighlight
          ver = {1}
          text={el.comment}
          name={el.name}
          upvote={el.upvote}
          key={i}
          rerenderParentCallback={this.rerenderParentCallback}
        />
      )
    })


    return (

      <section className="commentSection">
        <div id="circles">
          <h2>Conversation</h2>
        </div>
        <div id="topicInput">
          <form method="POST" action='/topic' onSubmit={this.props.submitTopic}>
              <input id= "nameInput" ref={(ref) => {this.topic = ref}} name="num" type="text" placeholder="ver" onChange={this.props.uponChange}></input>
              <input ref={(ref) => {this.topic = ref}} name="topic" type="text" placeholder="Enter topic" onChange={this.props.uponChange}></input>
              <input type='submit' value="submit"></input>
          </form>
          {topic1}
        </div>
        <div id="res">
          {firstMessages}
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
          <div id="top">
            <p>What do you need a decision on?</p> 
          </div>
          <div id="mid">
            <p>Group inputs</p> 
          </div>
          <div id="low">
            <p>Add input here</p>
          </div>
        </div>
      </section>
    )
  }
}

export default Comments;
