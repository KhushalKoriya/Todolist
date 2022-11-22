import React, { useState } from "react";
import "./Todoadd.css";

const Todoadd = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const todoData = {
      value: enteredValue,
      isChecked : false
    };
    props.onSaveTodoData(todoData);
    setEnteredValue("");
  };
  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="form-control"
          value={enteredValue}
          placeholder="Add New Car"
          onChange={valueChangeHandler}
        />
        <button type="submit" hidden>Add</button>
      </form>
    </div>
  );
};
export default Todoadd;
