import React, { useState } from "react";
import "./LoginPage.css";
import { Alert } from "@mui/material";

export default function LoginPage({ localUsers, setLocalUsers, setLoginPage }) {
  const [invalidPwd, setInvalidPwd] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const searchUser = (event) => {
    event.preventDefault();
    let inputUserEmail = event.target.loginUser.value;
    let inputUserPwd = event.target.userPassword.value;
    let hasUser = false;
    let pwdMatch = false;
    let currUser;
    localUsers.map((user) => {
      if (user.email == inputUserEmail) {
        hasUser = true;
        if (user.password == inputUserPwd) {
          pwdMatch = true;
          currUser = user;
        }
      }
    });

    if (hasUser && pwdMatch) {
      let tempUsers = localUsers.filter((user) => user.email != inputUserEmail);
      currUser.login = true;
      tempUsers.push(currUser);
      setInvalidEmail(false);
      setInvalidPwd(false);
      setLocalUsers(tempUsers);
      setLoginPage([{ login: false }]);
      // window.location.reload();
      return;
    }
    if (hasUser) {
      setInvalidEmail(false);
      setInvalidPwd(true);
      return;
    }
    setInvalidEmail(true);
    return;
  };

  const goBackToSignUp = (event) => {
    event.preventDefault();
    setLoginPage([{ login: false }]);
  };

  return (
    <form action="" onSubmit={searchUser} className="login-user-form">
      {invalidPwd && <Alert severity="error">Invalid Password!</Alert>}
      {invalidEmail && <Alert severity="error">Invalid Email!</Alert>}
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
      <button onClick={goBackToSignUp} className="login-user-sign-up">
        Return to Sign-Up
      </button>
    </form>
  );
}
