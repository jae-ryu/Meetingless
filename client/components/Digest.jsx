import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import empty from '../assets/empty.PNG';
import unmarked from '../assets/unmarked.PNG';
import marked from '../assets/marked.PNG';

const imagesPath = {
  first: empty,
  second: unmarked,
  third: marked
}
class Digest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: 'first',
    }
    this.toggleImage = this.toggleImage.bind(this);
    this.getImageName = this.getImageName.bind(this);
  }

  toggleImage = () => {
    if (this.state.open === 'first') this.setState({open: 'second'});
    if (this.state.open === 'second') this.setState({open: 'third'});
    if (this.state.open === 'third') this.setState({open: 'first'});
  }
  getImageName = () => {
    if (this.state.open === 'first') return 'first';
    if (this.state.open === 'second') return 'second';
    if (this.state.open === 'third') return 'third';
  } 

  render () {
    const imageName = this.getImageName();
    return (
      <section className="digestSection">
        <h2>Presentation</h2>
        <div className="prezi">
          <img style={{maxWidth: '750px'}} src={imagesPath[imageName]} onClick={this.toggleImage} />
        </div>
      </section>
    )
  }
}

export default Digest;
