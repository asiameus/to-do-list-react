import React, { useState } from "react";
import "./style.css";

const Form = ({addNewTask}) => {
  const [newTaskName, setNewTaskName] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskName.trim());
    setNewTaskName("");
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        value={newTaskName}
        className="form__input"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskName(target.value)}
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  )
};

export default Form;