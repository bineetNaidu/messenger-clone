import React from 'react';
import Messager from './Messager';
import Login from './Login';

// Statics
import './App.css';

function App() {
  // State
  const [user, setUser] = React.useState(null);
  const [darkMode, setDarkMode] = React.useState(true);

  // Functions
  const toggleMode = () => setDarkMode(!darkMode);

  return (
    <div className="app" style={{ background: `${darkMode ? '#010515' : ''}` }}>
      <img
        src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
        alt="Messenger logo"
        onClick={toggleMode}
      />
      <h1 className="app__tile" style={{ color: '#2e81f4' }}>
        Welcome to Messenger Clone
      </h1>

      {user ? (
        <Messager user={user} darkMode={darkMode} />
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  );
}

export default App;
