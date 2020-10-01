import React from 'react';

// Statics
import './App.css';
import Messager from './Messager';

function App() {
  // State

  const [username, setUsername] = React.useState('');

  // Hooks && Context
  React.useEffect(() => {
    setUsername(prompt('Please Enter Your Name'));
  }, []);

  return (
    <div className="app">
      <img
        src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
        alt="Messenger logo"
      />
      <h1 className="app__tile">Welcome to Message Clone</h1>

      <Messager username={username} />
    </div>
  );
}

export default App;
