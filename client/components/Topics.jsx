import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TopicHighlight from './TopicHighlight.jsx';


class Topics extends Component {
  constructor(props) {
    super(props)
  }

  render () {

    const topics = this.props.topics;

    const topic1 = topics.map((el, i) => {
      return (
        <TopicHighlight
          text={el.topic} 
          key={i}
        />
      );
    })

    let topic1Highest = 0;
    const messages1 = this.props.messages1;
    for (let i = 0; i < messages1.length; i++) {
      if (messages1[i].upvote > topic1Highest) topic1Highest = messages1[i].upvote;
    }

    return (
      <section className="topicsSection">
        <div className="title">
          <h2>Topics</h2>
        </div>
        <div className="title">
          <h2>Consensus</h2>
        </div>
        <div className="firstTopic">
          {topic1}
        </div>

        <div className="firstCounter">
          <p> {topic1Highest} / 5 </p>
        </div>

        <div className="secondTopic">
        
        </div>

        <div className="secondCounter">
            
        </div>

        <div className="thirdTopic"> 
        </div>
        
        <div className="thirdCounter">
          
        </div>
      </section>
    )
  }
}

export default Topics;
