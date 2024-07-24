import React from "react";
import "./LoginPage.css";

export default function LoginPage() {
  return (
    <form action="" className="login-user-form">
      <label className="login-user-label" htmlFor="loginUser">
        User Name
      </label>
      <input
        className="login-user-input"
        type="text"
        name="loginUser"
        id="loginUser"
        placeholder="Your Username"
      />
      <label className="login-user-label" htmlFor="userPassword">
        Password
      </label>
      <input
        className="login-user-input"
        type="password"
        name="userPassword"
        id="userPassword"
      />
      <button className="login-user-btn">login</button>
    </form>
  );
}
