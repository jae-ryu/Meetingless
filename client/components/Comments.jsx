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
      messages1: [],
    };
  }

  componentDidMount() {

    fetch('/getTopics')
      .then(res => res.json())
      .then(result => {
        console.log('made it to fetch gettopics');
        console.log('----------topics result------');
        console.log(result);
        this.setState({ topics : result });
        this.setState({ messages1 : result[0].message })
      })
      .catch(err => console.log('fetch getTopics error'))
 
    // fetch('/getMessages')
    //   .then(res => res.json())
    //   .then(messages => {
    //     console.log('in fetch getMessage');
    //     console.log('----------messages result------');
    //     console.log(messages);
    //     this.setState({ messages : messages });
    //   })
    //   .catch(err => console.log('fetch getMessage error'))

    // Promise.all([fetch('/getTopics'), fetch('/getMessages')]) 
    //   .then(([res1, res2]) => {
    //     return Promise.all([res1.json(), res2.json()])
    //   })
    //   .then(([res1, res2]) => {
    //     this.setState({ topics: res1 })
    //     this.setState({ messages: res2 }) 
    //   })
    //   .catch(([err1, err2]) => console.log(err1 + ' ' + err2))
  }

  render () {
    
    console.log('-----latest state topics below-----');
    console.log(this.state.topics);
    console.log('-----latest state messages below-----');
    console.log(this.state.messages1);

    const {topics} = this.state;

    const topic1 = topics.map((el) => {
      return (
        <TopicHighlight
          text={el.topic} 
        />
      );
    })

    // topics = [ {num, topic, message}]

    // const topic1Messages = [];
    // for (let i = 0; i < topics.length; i++) {
    //   if (topics[i].num === 1) {
    //     topic1Messages = topics[i].message;
    //   }
    // }

    // topic1Messages = [{upvote, name, comment}, {}]

    const {messages1} = this.state;;

    const firstMessages = messages1.map((el) => {
      return (
        <InputHighlight
          text={el.comment}
          name={el.name}
          upvote={el.upvote}
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
