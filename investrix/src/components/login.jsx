import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleLogin } from '../service/authService.jsx';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await handleLogin(username, password);
      console.log("Login Successful:", data);
      localStorage.setItem('token', data.token);
      navigate('/dashboard'); // Redirect to dashboard on successful login
    } catch (error) {
      setError("Login failed: " + error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Login;
