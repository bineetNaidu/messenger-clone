import React from 'react';
import useFormState from './hooks/useFormState';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Message from './Message';
import { db, timestamp } from './firebase';

// Statics
import './App.css';

function App() {
  // State
  const [input, handleInput, resetInput] = useFormState('');
  const [username, setUsername] = React.useState('');
  const [messages, setMessages] = React.useState([]);

  // Hooks && Context
  React.useEffect(() => {
    setUsername(prompt('Please Enter Your Name'));
  }, []);

  React.useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snap) =>
        setMessages(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      );
  }, []);

  // Functions
  const sendMessage = (e) => {
    e.preventDefault();
    db.collection('messages').add({
      text: input,
      username,
      timestamp,
    });
    resetInput();
  };

  return (
    <div className="app">
      <h1>Lets build a Messenger Clone.</h1>
      <h2>{username}</h2>

      <form>
        <FormControl>
          <InputLabel>Enter A Message</InputLabel>
          <Input value={input} onChange={handleInput} />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={!input}
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </FormControl>
      </form>

      {/* messages */}
      {messages.map((msg) => (
        <Message message={msg} username={username} key={msg.id} />
      ))}
    </div>
  );
}

export default App;
