import React from 'react';
import useFormState from './hooks/useFormState';

// Statics
import './App.css';

function App() {
  // State
  const [input, handleInput, resetInput] = useFormState('');
  const [messages, setMessages] = React.useState([]);

  // Functions
  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, input]);
    resetInput();
  };

  return (
    <div className="app">
      <h1>Lets build a Messenger Clone.</h1>

      <form>
        <input type="text" value={input} onChange={handleInput} />
        <button type="submit" onClick={sendMessage}>
          Send Message
        </button>
      </form>

      {/* messages */}
      {messages.map((msg) => (
        <p>{msg}</p>
      ))}
    </div>
  );
}

export default App;
