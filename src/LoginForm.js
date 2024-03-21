import React from 'react';
import './App.css'; 

function LoginForm() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h1>WELCOME BACK!</h1>
        <p>Please Enter your details to proceed</p>
        <h2>Login</h2>

        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <label for="rememberMe">Remember Me:</label>
  <input type="checkbox" id="rememberMe" name="rememberMe"></input>
            <br></br>
            <br></br>
        <button type="submit" className="login-button">Login</button>
        <p className="create-account">Don't have an account? <a href="#">Create one</a></p>
      </form>

    </div>
  );
}

export default LoginForm;
