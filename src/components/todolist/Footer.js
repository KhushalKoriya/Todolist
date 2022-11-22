import React, { useState } from "react";
import "./Footer.css";

const Footer = (props) => {
  const [footerChange, setFooterChange] = useState("all");

  const handleClick = (changeState) => {
    setFooterChange(changeState);
    props.footerChangeFn(changeState);
  };

  return (
    <div className="footerr">
      <div className="footer">
        <a onClick={() => props.handleClick("add")} className="add"></a>
        <a onClick={() => props.handleClick("search")} className="search"></a>
      </div>
      <div className="count">{`${props.data.length} items left`}</div>
      <div className="footerul">
        <ul className="filterul">
          <li>
            <a onClick={() => handleClick("all")}>All</a>
          </li>
          <li>
            <a onClick={() => handleClick("completed")}>Completed</a>
          </li>
          <li>
            <a onClick={() => handleClick("active")}>Active</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
