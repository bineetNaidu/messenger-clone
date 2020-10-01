import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Message from './Message';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import useFormState from './hooks/useFormState';
import { db, timestamp } from './firebase';

const Messager = ({ username }) => {
  // States
  const [input, handleInput, resetInput] = useFormState('');
  const [messages, setMessages] = React.useState([]);

  // Hooks
  React.useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snap) =>
        setMessages(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      );
  }, []);

  const dummy = React.useRef();

  // Functions
  const sendMessage = (e) => {
    e.preventDefault();
    db.collection('messages').add({
      text: input,
      username,
      timestamp,
    });
    resetInput();
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <h2 className="app__tile">
        Hey!! {username}{' '}
        <span role="img" aria-labelledby="Wave Emoji">
          👋
        </span>
      </h2>

      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            value={input}
            onChange={handleInput}
            placeholder="Enter Message"
          />
          <IconButton
            variant="contained"
            color="primary"
            className="app__iconBtn"
            type="submit"
            disabled={!input}
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      {/* messages */}
      <div className="app__messageBox">
        <FlipMove>
          {messages.map((msg) => (
            <Message message={msg} username={username} key={msg.id} />
          ))}
        </FlipMove>
        <span ref={dummy}></span>
      </div>
    </>
  );
};

export default Messager;
