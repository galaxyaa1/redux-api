import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <div className="landing-container">
    <div className="image-container">
      <img src="/images/developer.jpg" alt="Landing" />
    </div>
    <div className="content-container">
      <h1>Welcome to My Redux App</h1>
      <p>Start your journey by signing up or logging in.</p>
      <div className="button-group">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/signup" className="btn">Signup</Link>
      </div>
    </div>
  </div>
);

export default LandingPage;
