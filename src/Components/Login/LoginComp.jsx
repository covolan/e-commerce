import React, { useState } from "react";
import "./LoginComp.css";

export default function LoginComp({ localUsers }) {
  const clearLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  const [nameField, setNameField] = useState(false);
  const [emailField, setEmailField] = useState(false);
  const [pwdField, setPwdField] = useState(false);
  const [avatarField, setAvatarField] = useState(false);

  const [name, email, img] = [
    localUsers[0].name,
    localUsers[0].email,
    localUsers[0].img,
  ];

  const handleChangeName = () => {
    let currentUser = localUsers.filter((user) => user.name == name);
  };

  const fieldChanger = (field) => {
    switch (field) {
      case "name":
        setNameField(true);
        break;
    }
  };

  return (
    <div className="login-comp">
      <h1 className="login-comp-title">{name} You are logged In</h1>
      <div className="account-options">
        <div className="acc-opt">
          {nameField ? (
            <ChangeField />
          ) : (
            <>
              <span className="info-acc-text">{name}</span>
              <button
                onClick={() => {
                  fieldChanger("name");
                }}
                className="change-btn"
              >
                Change Name
              </button>
            </>
          )}
        </div>
        <div className="acc-opt">
          <span className="info-acc-text">{email}</span>{" "}
          <button className="change-btn">Change Email</button>
        </div>
        <div className="acc-opt">
          <span className="info-acc-text">Password</span>
          <button className="change-btn">Change Password</button>
        </div>
        <div className="acc-opt">
          <img className="avatar-acc" src={img} alt="" />

          <button className="change-btn">Change Picture</button>
        </div>
        <div className="acc-opt center-opt">
          <button className="change-btn red-btn">Log off</button>
        </div>
      </div>
      <button onClick={clearLocalStorage}>clear local storage</button>
    </div>
  );
}

const ChangeField = () => {
  return (
    <form action="">
      <input type="text" name="changeName" id="changeName" />
      <div className="action-btns">
        <button className="change-btn">confirm</button>
        <button className="change-btn red-btn">cancel</button>
      </div>
    </form>
  );
};
