import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api'
import { Link } from 'react-router-dom/dist';
import './login'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const user = await login(username, password);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <img src='/images/Center_of_Screen.png' alt='Lockscreen'/>
      <div className='heading'>
        <h2>Login</h2>
      </div>
      <form onSubmit={handleLogin} className="signin-form">
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-login">Login</button>
      </form>
      <div className="text-below">
        <p>Don't have an account? <Link to="/signup"className='signup-link'>Click here</Link> to create one!</p>
      </div>
    </div>
  );
}

export default Login;
