import React from 'react';
import './App.css';
import imageSrc from './Screenshot 2024-03-19 101205.png'; 
import LoginForm from './LoginForm';

function App() {
  return (
    <div className="container">
      <div className="content">
        <div className="login-form-container">
          <LoginForm />
        </div>
      </div>
      <div className="image-container">
        <img src={imageSrc} alt="Image" className="image" />
      </div>
    </div>
  );
}

export default App;
