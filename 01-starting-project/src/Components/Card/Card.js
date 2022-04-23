import React from 'react';
import "./Card.css";
import Button from "./Button";
import { useCallback, useState } from "react";

const Card = (props) => {
  const { setUserInList } = props;
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const addUser = (event) => {
    event.preventDefault();
    setUserInList(name, age);
    setName("");
    setAge('')
  };
  console.log("name", name);
  return (
    <div className="input">
      <form onSubmit={addUser}>
        <label>Name</label>
        <input placeholder="name" type="text" value={name} onChange={nameChangeHandler} />
        <label>Age</label>
        <input placeholder="age" type="number" value={age} onChange={ageChangeHandler} />
        <Button type="submit" />
      </form>
    </div>
  );
};

export default Card;
