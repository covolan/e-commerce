import React from "react";
import "./CSS/LoginSignup.css";

function LoginSignup() {
  return (
    <div className="loginSignUp">
      <h1>Sign Up</h1>

      <div className="loginSignUp-form">
        <label className="label-login" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          required
          name="username"
          placeholder="Your Username"
          id="username"
        />

        <label className="label-login" htmlFor="email">
          E-mail
        </label>
        <input
          type="email"
          required
          name="email"
          id="email"
          placeholder="example@email.com"
        />

        <label className="label-login" htmlFor="password">
          Password
        </label>
        <input type="password" required name="password" id="password" />
        <button className="continue-btn">continue</button>
      </div>

      <p className="loginSignUp-login">
        Already have and account? <span>Login here</span>
      </p>

      <div className="loginSignUp-terms">
        <input type="checkbox" name="terms-checkbox" id="terms" />
        <p>By continuing, i agree to the terms of use & privacy policy.</p>
      </div>
    </div>
  );
}

export default LoginSignup;
