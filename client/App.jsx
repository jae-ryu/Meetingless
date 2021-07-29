import React, { Component } from 'react';
// import Row from './Row';
import Comments from './components/Comments.jsx';
import Topics from './components/Topics.jsx';
import Digest from './components/Digest.jsx';
import Tracker from './components/Tracker.jsx';

// import Leaders from './Leaders';
import './scss/style.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      messages1: [],
      count: 0,
    }
    this.updateCount = this.updateCount.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateCount() {
    this.setState({count : this.state.count+1});
    this.forceUpdate();
  }


  // added this from Comments
  componentDidMount() {

    fetch('/getTopics')
      .then(res => res.json())
      .then(result => {
        console.log('made it to fetch gettopics');
        console.log('----------topics result------');
        console.log(result);
        this.setState({ topics : result });

        // sort logic
        const unsorted = result[0].message;
        const sorted = unsorted.sort((a,b) => b.upvote - a.upvote);

        this.setState({ messages1 : sorted })
        // this.setState({ messages1 : result[0].message })

      })
      .catch(err => console.log('fetch getTopics error'))
  }

  
  render() {
    console.log('this state topics ');
    console.log(this.state.topics);
    console.log('this state messages1 ');
    console.log(this.state.messages1);

    return (
      <div className="container">
        {/* <div id="name">
          <form method="POST" action='/login' onSubmit={this.handleSubmit}>
            <input name="username" type="text" placeholder="name" value={this.state.username} onChange={this.handleChange}></input>
            <input type='submit' value="submit"></input>
          </form>
          <div className="logged">
            <p>Logged in as {this.state.username}</p>
          </div>
        </div> */}
        <div id="topics">
          <Topics topics={this.state.topics} messages1={this.state.messages1} key="topics"/>
        </div>
        <div id="trackers">
          <Tracker/>
          <p>WIP</p>
        </div>
        <div id="digests">
          <Digest/>
          {/* <p>digests</p> */}
        </div>
        <div id="comments">
          <Comments topics={this.state.topics} messages1={this.state.messages1} key="comments" updateCount={this.updateCount}/>
          {/* <p>comments</p> */}
        </div>
      </div>
    );
  }
}

export default App;
