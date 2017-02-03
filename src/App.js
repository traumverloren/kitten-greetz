import React, { Component } from 'react';
import kitten from './images/paralyzed-kitten-lego-wheelchair.png';
import './App.css';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import Greeting from './components/Greeting';
import reducer from './reducers';
import { sendGreeting } from './actions'

const mapStateToProps = (state) => {
  return {
    isSubmitted: state.isSubmitted,
    messages: state.messages,
  };
};

const mapDispatchToProps = (dispatch) => ({
  submitGreeting(message) {
    dispatch(sendGreeting(message));
  },
});

const GreetingContainer = connect(mapStateToProps,mapDispatchToProps)(Greeting);

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-title"><h2>Kitten Greetz</h2></div>
          <div className="App-image">
            <img src={kitten} className="App-kitten" alt="kitten" />
          </div>
          <GreetingContainer></GreetingContainer>
        </div>
      </Provider>
    );
  }
}

export default App;
