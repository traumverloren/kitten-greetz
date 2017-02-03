import React from 'react';
import '../Greeting.css';

const Greeting = ({isSubmitted, message, submitGreeting}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.blur();
    submitGreeting(e.target.message.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="cat-response">{isSubmitted ? "Meow" : ""}</div>
        <input name="message" type="text" placeholder="Say Hi."/>
        <button type="submit">Submit</button>
        <div className="message">{isSubmitted ? message : ""}</div>
      </form>
    </div>
  )
};

export default Greeting;
