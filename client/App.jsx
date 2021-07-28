import React, { Component } from 'react';
// import Row from './Row';
// import GameList from './components/GameList.jsx';
// import Leaders from './Leaders';
import './scss/style.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      username: event.target.value
    })
  }

  handleSubmit(event) {
    alert('A name was submitted: '+ this.state.username);
    event.preventDefault();
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
          <p>topics</p>
        </div>
        <div id="trackers">
          <p>trackers</p>
        </div>
        <div id="digests">
          <p>digests</p>
        </div>
        <div id="comments">
          <p>comments</p>
        </div>
      </div>
    );
  }
}

export default App;
