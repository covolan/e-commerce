import React, { useEffect, useRef, useState } from "react";
import { Alert } from "@mui/material";
import "./SignUpComp.css";
import UserPage from "./UserPage";
import avatar from "../assets/avatar-placeholder.png";
import LoginPage from "./LoginPage";

export default function SignUp() {
  const formRef = useRef(null);
  const localStorageUsers = JSON.parse(localStorage.getItem("users"));
  const [localUsers, setLocalUsers] = useState(() => {
    if (localStorageUsers == null) {
      return [];
    }
    return localStorageUsers;
  });

  const addUser = (data) => {
    if (searchUser(data)) return;

    setLocalUsers([
      {
        id: Date(),
        name: data.name,
        email: data.email,
        password: data.password,
        login: true,
        img: avatar,
      },
      ...localUsers,
    ]);
  };

  const IsLoggedIn = () => {
    let userLoggedIn = false;

    localUsers.map((item) => {
      if (item.login) {
        userLoggedIn = true;
      }
    });
    return userLoggedIn;
  };

  const searchUser = (currData) => {
    let hasUser = false;

    localUsers.map((item) => {
      if (currData.email == item.email && currData.name == item.name) {
        hasUser = true;
      }
    });
    return hasUser;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const eventTarget = event.target;
    addUser({
      name: eventTarget.username.value,
      email: eventTarget.email.value,
      password: eventTarget.password.value,
    });
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(localUsers));
    console.log(localUsers);
  }, [localUsers]);

  const clearLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  return <LoginPage />;
  if (IsLoggedIn(localUsers)) {
    return <UserPage localUsers={localUsers} setLocalUsers={setLocalUsers} />;
  }

  return (
    <div className="loginSignUp">
      <Alert className="alert-password" severity="warning">
        This page stores your data in localStorage, DO NOT USE YOUR REAL
        PASSWORD
      </Alert>

      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit} ref={formRef} className="loginSignUp-form">
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
        <p className="loginSignUp-login">
          Already have and account?{" "}
          <button className="login-here-btn">Login here</button>
        </p>

        <div className="loginSignUp-terms">
          <input type="checkbox" required name="terms-checkbox" id="terms" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </form>
      <button onClick={clearLocalStorage}> clear local storage</button>
    </div>
  );
}
