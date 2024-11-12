import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleSignUp } from '../service/authService.jsx';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await handleSignUp(username, password);
      console.log("SignUp Successful:", data);
      setMessage("Account created successfully!");
      setTimeout(() => navigate('/dashboard'), 2000); // Redirect after 1-second delay
    } catch (error) {
      setMessage("SignUp failed: " + error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
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
        <button type="submit">Sign Up</button>
      </form>
      {message && <p style={{ color: message.includes("failed") ? 'red' : 'green' }}>{message}</p>}
    </div>
  );
}

export default SignUp;