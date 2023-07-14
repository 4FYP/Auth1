
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import DarklightMode from './DarklightMode';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const [message, setMessage] = useState('');
const navigate = useNavigate();
  const handleLogin = () => {
    axios
      .post('http://localhost:8800/login', { email, password })
      .then((result) => {
         navigate('/');
      })
      .catch((error) => {
         setMessage(error.response.data);
      });
  };
  const [theme, setTheme] = useState('light2');

  const toggleTheme = () => {
    if (theme === 'light2') {
      setTheme('dark2');
    } else {
      setTheme('light2');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div>
      <div className={`App ${theme}`}>
      <button onClick={toggleTheme}>
        {theme === 'light2' ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
        
      </button>
    </div>
    <div className='login_back_div'>
        <div className='login_div'>
        <h2>Login</h2>
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
      
      <button type="submit" onClick={handleLogin} className='btn btn-success w-100' >Login</button>
      <p>You are agree</p>
      <Link  to="/signup" className='btn btn-default border w-100 bg-light text-decuration-none'>
        Create Account</Link>
      
        </div>
    </div>
    </div>
  );
};

export default Login;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//  const [message, setMessage] = useState('');
// const navigate = useNavigate();
//   const handleLogin = () => {
//     axios
//       .post('http://localhost:5000/login', { email, password })
//       .then((result) => {
//          navigate('/home');
//       })
//       .catch((error) => {
//          setMessage(error.response.data);
//       });
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>

//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default Login;
