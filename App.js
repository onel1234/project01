import React from 'react';
import './App.css'; 
import imageSrc from './Screenshot 2024-03-19 101205.png';

function App() {
  return (
    <div className="container">
      <div className="image-container">
       
        <img src={imageSrc} alt="Image" className="image" />
      </div>
      <div className="login-container">
        <div className="login-form">
          <h2>WELCOME BACK!</h2>
          <p> please enter your details to proceed</p>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button className="login-button">Login</button>
          <p className="create-account">Don't have an account? <a href="#">Create one</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;
