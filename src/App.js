import React, { Component } from 'react';
import kitten from './images/paralyzed-kitten-lego-wheelchair.png';
import './App.css';
import GreetingContainer from './containers/GreetingContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-title"><h2>Kitten Greetz</h2></div>
        <div className="App-image">
          <img src={kitten} className="App-kitten" alt="kitten" />
        </div>
        <GreetingContainer></GreetingContainer>
      </div>
    );
  }
}

export default App;
