import React, { useRef, useState } from "react";
import "./Todosearch.css";

const Todosearch = (props) => {
  const inputref = useRef();
  let inputHandler = (e) => {
    let inputSearchText = inputref.current.value.toLowerCase();
    props.Searchdata(inputSearchText);
  };

  return (
    <div>
      <input
        type="text"
        className="form-control"
        ref={inputref}
        // value={inputValue}
        onChange={(e)=>inputHandler(e)}
        placeholder="Search"
      />
    </div>
  );
};
export default Todosearch;
