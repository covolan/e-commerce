import React from "react";
import "./LoginPage.css";

export default function LoginPage({ localUsers, setLocalUsers, setLoginPage }) {
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
      setLocalUsers(tempUsers);
      setLoginPage([{ login: false }]);
      window.location.reload();
    }
  };
  return (
    <form action="" onSubmit={searchUser} className="login-user-form">
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
