import React, { Component } from 'react';
import './TextForm.css';

class TextForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange(event) {
  console.log(event.target.value);
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  console.log('An message was submitted: ' + this.state.value);
  event.preventDefault();
}
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <textarea placeholder='Please type a message to the kitty.' value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value='Submit' />
        </form>
    );
  }
}

export default TextForm;
