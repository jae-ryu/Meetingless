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
  }

  // componentDidMount() {

  //   fetch('/getTopics')
  //     .then(res => res.json())
  //     .then(result => {
  //       console.log('made it to fetch gettopics');
  //       console.log('----------topics result------');
  //       console.log(result);
  //       this.setState({ topics : result });

  //       // sort logic
  //       const unsorted = result[0].message;
  //       const sorted = unsorted.sort((a,b) => b.upvote - a.upvote);

  //       this.setState({ messages1 : sorted })
  //       // this.setState({ messages1 : result[0].message })

  //     })
  //     .catch(err => console.log('fetch getTopics error'))
  // }

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

        </div>
      </section>
    )
  }
}

export default Comments;
