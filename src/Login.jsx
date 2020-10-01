import React from 'react';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';

const Login = ({ setUser }) => {
  // Functions
  const handleLogin = (e) => {
    e.preventDefault();

    auth
      .signInWithPopup(provider)
      .then(({ user }) =>
        setUser({ username: user.displayName, photo: user.photoURL })
      )
      .catch((err) => alert(err.message));
  };

  return (
    <Button
      className="login"
      variant="contained"
      color="primary"
      style={{ marginTop: '20%' }}
      onClick={handleLogin}
    >
      Sign In with Google
    </Button>
  );
};

export default Login;
