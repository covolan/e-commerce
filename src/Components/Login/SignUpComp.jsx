import React, { useEffect, useRef, useState } from "react";
import { Alert } from "@mui/material";
import "./SignUpComp.css";
import UserPage from "./UserPage";
import avatar from "../assets/avatar-placeholder.png";
import LoginPage from "./LoginPage";

export default function SignUp() {
  const formRef = useRef(null);
  const localLoginPage = JSON.parse(localStorage.getItem("loginPage"));
  const localStorageUsers = JSON.parse(localStorage.getItem("users"));
  const [localUsers, setLocalUsers] = useState(() => {
    if (localStorageUsers == null) {
      return [];
    }
    return localStorageUsers;
  });
  // Sim.. Isso é uma gambiarra.
  const [loginPage, setLoginPage] = useState(() => {
    if (localLoginPage == null) return [];
    return localLoginPage;
  });
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidUser, setInvalidUser] = useState(false);

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

  const isPageLogin = () => {
    if (loginPage.length > 0 && loginPage[0].login) {
      return true;
    }
    return false;
  };

  const goToLogin = (event) => {
    event.preventDefault();
    setLoginPage([
      {
        login: true,
      },
    ]);
  };

  const searchUser = (currData) => {
    let hasUser = false;

    localUsers.map((item) => {
      if (currData.name == item.name) {
        hasUser = true;
        setInvalidUser(true);
        setInvalidEmail(false);
      } else if (currData.email == item.email) {
        hasUser = true;
        setInvalidEmail(true);
        setInvalidUser(false);
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
    setInvalidEmail(false);
    setInvalidUser(false);
    setLoginPage([
      {
        login: false,
      },
    ]);
  }, []);

  useEffect(() => {
    localStorage.setItem("loginPage", JSON.stringify(loginPage));
  }, [loginPage]);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(localUsers));
  }, [localUsers]);

  const clearLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  if (isPageLogin()) {
    return (
      <LoginPage
        localUsers={localUsers}
        setLoginPage={setLoginPage}
        setLocalUsers={setLocalUsers}
      />
    );
  }
  if (IsLoggedIn()) {
    return <UserPage localUsers={localUsers} setLocalUsers={setLocalUsers} />;
  }

  return (
    <div className="loginSignUp">
      <Alert className="alert-password" severity="warning">
        This page stores your data in localStorage, DO NOT USE YOUR REAL
        PASSWORD
      </Alert>
      {invalidUser && (
        <Alert severity="error">Invalid User or Already taken</Alert>
      )}
      {invalidEmail && (
        <Alert severity="error">Invalid Email or Already registered</Alert>
      )}

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

        <div className="loginSignUp-terms">
          <input type="checkbox" required name="terms-checkbox" id="terms" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>

        <button type="submit" className="continue-btn">
          continue
        </button>

        <p className="loginSignUp-login">
          Already have and account?{" "}
          <button onClick={goToLogin} className="login-here-btn">
            Login here
          </button>
        </p>
      </form>
      <button onClick={clearLocalStorage}> clear local storage</button>
    </div>
  );
}
