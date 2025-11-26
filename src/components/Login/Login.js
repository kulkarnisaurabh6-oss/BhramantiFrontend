import React, { useState } from 'react';
import './Login.css';
import { Link,useNavigate } from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const navigate = useNavigate();
  const handleSubmit = (e) => {
    
    e.preventDefault();
    

    // Replace this with your backend API call
    if (username === 'admin' && password === 'admin@123') {
      
      navigate('/Dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className='LoginBackGround'>
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <p>
        Don't have an account? <Link to="/Registration">Sign up here</Link>
      </p>
      </form>
        

    </div>
    </div>
  );
};

export default Login;
