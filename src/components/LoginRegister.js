import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginRegister.css';

const LoginRegister = ({ isLogin = true }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [isLoginMode, setIsLoginMode] = useState(isLogin);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoginMode(isLogin);
    const savedTheme = localStorage.getItem('theme');
    setIsDarkMode(savedTheme === 'dark');
  }, [isLogin]);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage('');

    try {
      if (isLoginMode) {
        // Check for admin credentials
        if (username === 'aayush' && password === 'ayush') {
          // Set admin token and flag
          localStorage.setItem('token', 'admin-token'); // You should use a proper JWT token in production
          localStorage.setItem('isAdmin', 'true');
          setResponseMessage('Admin login successful!');
          navigate('/home');
          return;
        }

        // Regular user login
        const response = await axios.post('http://localhost:8080/api/users/login', {
          username,
          password
        });

        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('isAdmin', 'false'); // Ensure regular users don't get admin access
          setResponseMessage('Login successful!');
          navigate('/home');
        }
      } else {
        // Registration - prevent creating new admin accounts
        if (username === 'aayush') {
          setResponseMessage('Username not available');
          return;
        }

        const response = await axios.post('http://localhost:8080/api/users/register', {
          username,
          password,
          firstName,
          email,
          phone
        });

        if (response.data.message) {
          setResponseMessage('Registration successful! Please login.');
          setTimeout(() => {
            setIsLoginMode(true);
            setUsername('');
            setPassword('');
            setFirstName('');
            setEmail('');
            setPhone('');
          }, 2000);
        }
      }
    } catch (error) {
      setResponseMessage(
        error.response?.data?.message || 
        `${isLoginMode ? 'Login' : 'Registration'} failed. Please try again.`
      );
    }
  };

  return (
    <div className={`auth-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <svg viewBox="0 0 24 24">
            <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24">
            <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
          </svg>
        )}
      </button>

      <div className="auth-box">
        <div className="logo-container">
          <img 
            src="/images/achar-logo.png" 
            alt="Logo" 
            className="logo" 
          />
        </div>
        <h2>{isLoginMode ? 'Sign In' : 'Create Account'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLoginMode && (
            <>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="John"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  required
                />
              </div>
            </>
          )}
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          
          <button type="submit" className="submit-button">
            {isLoginMode ? 'Sign In' : 'Create Account'}
          </button>
          
          <div className="luxury-divider">
            <span>or</span>
          </div>
          
          <button
            type="button"
            className="toggle-button"
            onClick={() => {
              setIsLoginMode(!isLoginMode);
              setResponseMessage('');
            }}
          >
            {isLoginMode ? 'Create New Account' : 'Back to Sign In'}
          </button>
          
          {responseMessage && (
            <div className={`message ${responseMessage.includes('successful') ? 'success' : 'error'}`}>
              {responseMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;
