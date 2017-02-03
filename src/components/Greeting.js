import React from 'react';
import '../Greeting.css';

const Greeting = ({isSubmitted, messages, submitGreeting}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.blur();
    submitGreeting(e.target.message.value);
    e.target.reset();
  }

  console.log(messages);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="cat-response">{isSubmitted ? "Meow" : ""}</div>
        <input name="message" type="text" placeholder="Say Hi."/>
        <button type="submit">Submit</button>
        <div className="messages">{messages.map((message) => {
            return (
              <div key={message.id}>
                {message.text}
              </div>
            )
          })}
        </div>
      </form>
    </div>
  )
};

export default Greeting;
