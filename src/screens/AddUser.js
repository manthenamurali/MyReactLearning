import "./AddUser.css";
import Button from "../widgets/Button";
import { useState } from "react";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");

  const clickListener = () => {
    console.log("Add User button clicked");

    const newUser = {
      userName: userName,
      age: age,
    };

    props.userAddedCallback(newUser);
  };

  const userNameChangeListener = (event) => {
    setUserName(event.target.value);
  };

  const userAgeChangeListener = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="details-container">
      <h4>Username</h4>
      <input type="text" onChange={userNameChangeListener}></input>
      <h4>Age (Years)</h4>
      <input
        type="text"
        onChange={userAgeChangeListener}
        inputMode="numeric"
        min="18"
        max="99"
        minLength="2"
        maxLength="2"
      ></input>
      <Button clickListener={clickListener} title="Add User" />
    </div>
  );
};

export default AddUser;
