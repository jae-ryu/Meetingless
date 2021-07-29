import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TopicHighlight from './TopicHighlight.jsx';
import InputHighlight from './InputHighlight.jsx';


class Comments extends Component {
  constructor() {
    super();
    this.state = {
      topics: [],
      inputs: [],
    };
  }

  componentDidMount() {
    // run getTopics route, to populate this.state.topics array
    // add it to server and controller
    fetch('/getTopics')
      .then(res => res.json())
      .then(result => {
        console.log('made it to fetch gettopics');
        // console.log(topics);
        this.setState({ topics : result });
      })
      .catch(err => console.log('fetch getTopics error'))
      
    console.log('-----latest state topics below-----');
    console.log(this.state.topics);

    // run getInputs route, to populate this.state.inputs array
    // add it to server and controller
  }

  render () {
    
    console.log('-----latest state topics below-----');
    console.log(this.state.topics);

    const {topics} = this.state;

    const topic1 = topics.map((el) => {
      return (
        <TopicHighlight
          text={el.topic} 
        />
      );
    })

    // topics = [ {num, topic, message}]

    const topic1Messages = [];
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].num === 1) {
        topic1Messages = topics[i].message;
      }
    }

    // topic1Messages = [{upvote, name, comment}, {}]

    // const {message} = topics;

    const messages = topic1Messages.map((el) => {
      return (
        <InputHighlight
          text={el.comment}
          name={el.name}
        />
      )
    })


    return (

      <section className="commentSection">
        <div id="circles">
          <h2>Comments</h2>
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
          {messages}
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
