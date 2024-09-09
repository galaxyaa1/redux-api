import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [userData, setUserData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example: specific username and password validation (like the login page)
    if (userData.username === 'emilys' && userData.password === 'emilyspass') {
      dispatch(signup(userData, navigate));
    } else {
      setError('Invalid username or password for signup');
    }
  };

  return (
    <div className="signup-page">
      <h1 className="signup-heading">Create an Account</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="signup-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="signup-input"
        />
        <button type="submit" className="signup-button">Signup</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default SignupPage;
