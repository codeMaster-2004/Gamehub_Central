// src/Pages/Signup/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../api';
import './Signup.css'
import { Link } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const user = await signup(username, password);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className='signup-container'>
        <div className="heading">
            <h2> Sign Up </h2>
        </div>
        <form className='signup-form' onSubmit={handleSignup}>  
            <div className='form-group'>
              {error && <p className="error">{error}</p>}
                <label htmlFor='username'>
                    Username
                </label>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='password'>
                    Password
                </label>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button
              type="submit"
              className="btn-signup"
              style={{ marginLeft: 'center', marginRight: 'auto', display: 'block' }}
              onClick={handleSignup}>Sign Up
            </button>
        </form>
        <div className='text-below'>
            <p style={{ textAlign: 'center' }}>
                Already have an account? {' '}
                <Link to="../login" className='login-link'>Click here</Link> {' '}
                to sign in!
            </p>
          </div>
    </div>
  );
}

export default Signup;