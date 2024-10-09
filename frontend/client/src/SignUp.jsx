import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation after signup
import './LoginForm.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({ username: '', password: '', email: '', general: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setErrors({ username: '', password: '', email: '', general: '' });
    let hasError = false;

    // Validate fields
    if (!username) {
      setErrors((prev) => ({ ...prev, username: 'Username is required' }));
      hasError = true;
    }
    if (!password) {
      setErrors((prev) => ({ ...prev, password: 'Password is required' }));
      hasError = true;
    }
    if (!email) {
      setErrors((prev) => ({ ...prev, email: 'Email is required' }));
      hasError = true;
    }

    // If no errors, proceed with sign-up
    if (!hasError) {
      try {
        const response = await fetch('http://localhost:5000/auth/createuser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: username, email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          // Sign-up successful, redirect to login page
          console.log('Sign-up successful:', data);
          navigate('/login'); // Redirect to login page
        } else {
          // Display error message from the server response
          setErrors((prev) => ({ ...prev, general: data.error || 'Sign-up failed' }));
        }
      } catch (error) {
        console.error('Error during sign-up:', error);
        setErrors((prev) => ({ ...prev, general: 'An error occurred, please try again' }));
      }
    }
  };

  // Clear error as the user types
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (errors.username) {
      setErrors((prev) => ({ ...prev, username: '' }));
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (errors.password) {
      setErrors((prev) => ({ ...prev, password: '' }));
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: '' }));
    }
  };

  return (
    <div className="login-container  ">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {errors.general && <span className="error">{errors.general}</span>}
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <button type="submit">Sign Up</button>

        {/* Back to Login Link */}
        <div className="signup-option">
          <span>Already have an account? </span>
          <Link to="/login">Back to Login</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
