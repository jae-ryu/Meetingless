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
      username: '',
      topics: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log('got to handle change');
    this.setState({
      username: '',
      topics: [... {topic : event.target.value}],
    })
    console.log(this.state.topics);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('got to handle submit');
    fetch('/topic', {
      method: 'post',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
        "topic" : "you see me!!",
        "message" : {}
      })
      .then (res => res.json())
      .then (resJson => {
        console.log('Got to post fetch request with '+ resJson);
      })
      .catch((err) => console.log('error at post topic request ' +err))
    })
    // alert('A name was submitted: '+ this.state.username);
  }

  onSubmit(e) {

  }
  
  render() {
    return (
      <div className="container">
        <div id="name">
          <form method="POST" action='/login' onSubmit={this.handleSubmit}>
            <input name="username" type="text" placeholder="name" value={this.state.username} onChange={this.handleChange}></input>
            <input type='submit' value="submit"></input>
          </form>
          <div className="logged">
            <p>Logged in as {this.state.username}</p>
          </div>
        </div>
        <div id="topics">
          <Topics submitTopic={this.handleSubmit} uponChange={this.handleChange} />
          <p>topics</p>
        </div>
        <div id="trackers">
          <Tracker/>
          <p>trackers</p>
        </div>
        <div id="digests">
          <Digest/>
          <p>digests</p>
        </div>
        <div id="comments">
          <Comments/>
          <p>comments</p>
        </div>
      </div>
    );
  }
}

export default App;
