import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSignup = () => {
    axios
      .post('http://localhost:8800/signup', { username,email, password })
      .then((response) => {
        setMessage(response.data);
        setUsername('');
        setEmail('');
        setPassword('');
      })
      .catch((error) => {
        setMessage(error.response.data);
      });
  };

  return (
    <div className='login_back_div'>
        <div className='login_div'>
        <h2>Signup</h2>
        <div className='mb-3'>
            <label><strong>Name</strong></label>
        <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)} className='form-control rounded-0'
      />
        </div>
        <div className='mb-3'>
        <label><strong>Email</strong></label>
        <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} className='form-control rounded-0'
      />      
        </div>
        <div className='mb-3'>
        <label><strong>Password</strong></label>
        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} className='form-control rounded-0'
      />      
        </div>
    
      <button  type="submit" className='btn btn-success w-100' onClick={handleSignup}>Sign Up</button>
      <p>You are agree</p>
      <Link  to="/login" className='btn btn-default border w-100 bg-light text-decuration-none'>login</Link>
      {message && <p>{message}</p>}
        </div>      
    </div>
  );
};

export default Signup;
