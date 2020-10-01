import React from 'react';
import Messager from './Messager';
import Login from './Login';

// Statics
import './App.css';

function App() {
  // State
  const [user, setUser] = React.useState(null);

  return (
    <div className="app">
      <img
        src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
        alt="Messenger logo"
      />
      <h1 className="app__tile" style={{ color: '#2e81f4' }}>
        Welcome to Messenger Clone
      </h1>

      {user ? <Messager user={user} /> : <Login setUser={setUser} />}
    </div>
  );
}

export default App;
