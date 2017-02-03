import React, { Component } from 'react';
import kitten from './images/paralyzed-kitten-lego-wheelchair.png';
import './App.css';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import Greeting from './components/Greeting'


const mapStateToProps = (state) => {
  return {
    isSubmitted: state.isSubmitted,
    message: state.message,
  };
};

const mapDispatchToProps = (dispatch) => ({
    submitGreeting(message) {
      dispatch({type: 'PRESS_BUTTON', isSubmitted: true, message});
    },
});

const GreetingContainer = connect(mapStateToProps,mapDispatchToProps)(Greeting);

const reducer = (state = { isSubmitted: false, message: '' }, action) => {

  switch(action.type){
    case 'PRESS_BUTTON':
      return { isSubmitted: action.isSubmitted, message: action.message };
    default:
      return state;
  }
};

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
