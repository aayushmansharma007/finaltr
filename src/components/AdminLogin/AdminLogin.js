import React, { useState } from 'react';
import './AdminLogin.css';

const AdminLogin = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username === 'lanos' && credentials.password === 'lanostech') {
      onLogin(true);
      // Remove localStorage.setItem line
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="admin-login-overlay">
      <div className="admin-login-container">
        <h2>Admin Login</h2>
        {error && <div className="login-error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="login-form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={credentials.username}
              onChange={(e) => setCredentials({...credentials, username: e.target.value})}
              required
            />
          </div>
          <div className="login-form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              required
            />
          </div>
          <button type="submit" className="login-submit-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
