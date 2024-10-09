import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '', general: '' });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setErrors({ email: '', password: '', general: '' });
    let hasError = false;

    // Validate fields
    if (!email) {
      setErrors((prev) => ({ ...prev, email: 'Email is required' }));
      hasError = true;
    }
    if (!password) {
      setErrors((prev) => ({ ...prev, password: 'Password is required' }));
      hasError = true;
    }

    // If no errors, proceed with login logic
    if (!hasError) {
      try {
        const response = await fetch('http://localhost:5000/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (data.success) {
          // Save the auth token and redirect to /home
          localStorage.setItem('token', data.authtoken);
          navigate('/home'); // Redirect to the home page after successful login
        } else {
          setErrors((prev) => ({ ...prev, general: data.error || 'Invalid credentials' }));
        }
      } catch (error) {
        console.error('Error during login:', error);
        setErrors((prev) => ({ ...prev, general: 'An error occurred. Please try again.' }));
      }
    }
  };

  // Handle changes and remove errors when user starts typing
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: '' }));
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (errors.password) {
      setErrors((prev) => ({ ...prev, password: '' }));
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {errors.general && <span className="error">{errors.general}</span>}
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
        <button type="submit">Login</button>

        <div className="signup-option">
          <span>Don't have an account? </span>
          <Link to="/signup">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
