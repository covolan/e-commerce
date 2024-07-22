import React, { useState } from "react";
import "./LoginComp.css";

export default function LoginComp({ localUsers, setLocalUsers }) {
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

  const handleChangeName = (newName) => {
    let tempLocalUsers = localUsers.filter((user) => user.name != name);
    let currentUser = localUsers.filter((user) => user.name == name);
    currentUser = currentUser[0];
    currentUser.name = newName;
    tempLocalUsers.push(currentUser);
    setLocalUsers(tempLocalUsers);
  };
  const handleChangeEmail = (newEmail) => {
    let tempLocalUsers = localUsers.filter((user) => user.email != email);
    let currentUser = localUsers.filter((user) => user.email == email);
    currentUser = currentUser[0];
    currentUser.email = newEmail;
    tempLocalUsers.push(currentUser);
    setLocalUsers(tempLocalUsers);
  };
  const handleChangePassword = (newPassword) => {
    let tempLocalUsers = localUsers.filter((user) => user.email != email);
    let currentUser = localUsers.filter((user) => user.email == email);
    currentUser = currentUser[0];
    currentUser.password = newPassword;
    tempLocalUsers.push(currentUser);
    setLocalUsers(tempLocalUsers);
  };
  const handleChangePicture = (newImg) => {
    let tempLocalUsers = localUsers.filter((user) => user.email != email);
    let currentUser = localUsers.filter((user) => user.email == email);
    currentUser = currentUser[0];
    currentUser.img = newImg;
    tempLocalUsers.push(currentUser);
    setLocalUsers(tempLocalUsers);
  };
  const fieldChanger = (field) => {
    switch (field) {
      case "name":
        setNameField(true);
        break;
      case "email":
        setEmailField(true);
        break;
      case "password":
        setPwdField(true);
        break;

      case "image":
        setAvatarField(true);
        break;
    }
  };

  const logOff = () => {
    let tempLocalUsers = localUsers.filter((user) => user.email != email);
    let currentUser = localUsers.filter((user) => user.email == email);
    currentUser = currentUser[0];
    currentUser.login = false;
    tempLocalUsers.push(currentUser);
    setLocalUsers(tempLocalUsers);
  };

  return (
    <div className="login-comp">
      <h1 className="login-comp-title">{name} You are logged In</h1>
      <div className="account-options">
        <div className="acc-opt">
          {nameField ? (
            <ChangeField
              placeholder={name}
              handleChange={handleChangeName}
              option={"name"}
              secureField={false}
            />
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
          {emailField ? (
            <ChangeField
              placeholder={email}
              handleChange={handleChangeEmail}
              option={"email"}
              secureField={false}
            />
          ) : (
            <>
              <span className="info-acc-text">{email}</span>
              <button
                onClick={() => {
                  fieldChanger("email");
                }}
                className="change-btn"
              >
                Change Email
              </button>
            </>
          )}
        </div>
        <div className="acc-opt">
          {pwdField ? (
            <ChangeField
              handleChange={handleChangePassword}
              option={"password"}
              secureField={true}
              placeholder={null}
            />
          ) : (
            <>
              <span className="info-acc-text">Password</span>
              <button
                onClick={() => {
                  fieldChanger("password");
                }}
                className="change-btn"
              >
                Change Password
              </button>
            </>
          )}
        </div>
        <div className="acc-opt">
          {avatarField ? (
            <ChangeField
              handleChange={handleChangePicture}
              option={"picture"}
              secureField={false}
              placeholder={null}
            />
          ) : (
            <>
              <img className="avatar-acc" src={img} alt="" />
              <button
                onClick={() => {
                  fieldChanger("image");
                }}
                className="change-btn"
              >
                Change Picture
              </button>
            </>
          )}
        </div>
        <div className="acc-opt center-opt">
          <button onClick={logOff} className="change-btn red-btn">
            Log off
          </button>
        </div>
      </div>
      <button onClick={clearLocalStorage}>clear local storage</button>
    </div>
  );
}

const ChangeField = ({ option, handleChange, placeholder, secureField }) => {
  const [currInputData, setCurrInputData] = useState(null);
  return (
    <form className="change-field-component" action="">
      <input
        onChange={(e) => {
          setCurrInputData(e.currentTarget.value);
        }}
        type={secureField ? "password" : "text"}
        name={"change" + option}
        id={"change" + option}
        placeholder={secureField ? null : placeholder}
      />
      <div className="action-btns">
        <button
          onClick={() => {
            handleChange(currInputData);
          }}
          className="change-btn field-change-btn"
        >
          confirm
        </button>
        <button className="change-btn red-btn">cancel</button>
      </div>
    </form>
  );
};
