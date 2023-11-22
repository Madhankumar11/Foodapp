import React, { useState } from 'react';
import './Signup.css'; // Your CSS file

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation (you can add more complex validation here)
    const { username, email, password } = formData;
    let errors = {};

    if (!username) {
      errors.username = 'Username is required';
    }

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password should be at least 6 characters';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      // Simulating successful registration
      setIsRegistered(true);
    }
  };

  if (isRegistered) {
    // Simulated user data for the dashboard
    const userData = {
      username: formData.username,
      email: formData.email,
      // Other user data could be added here
    };

    return <Dashboard userData={userData} />;
  }

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

const Dashboard = ({ userData }) => {
  return (
    <div className="dashboard">
      <h2>Welcome to MadhanFoodShop, {userData.username}!</h2>
      <p>Email: {userData.email}</p>
      {/* Display other user information */}
    </div>
  );
};

export default Signup;
