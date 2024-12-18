import React, { useState } from "react";
import "./AuthPage.css";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Sign-Up

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h1>{isLogin ? "Log In" : "Sign Up"}</h1>
        <form>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter your full name" required />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>

          <button type="submit" className="auth-btn">
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>
        <p>
          {isLogin
            ? "Don't have an account? "
            : "Already have an account? "}
          <button className="toggle-btn" onClick={toggleAuthMode}>
            {isLogin ? "Sign Up" : "Log In"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
