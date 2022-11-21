import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import "./Todolist.css";
import TodolistItem from "../todolist/Todolistitem";
import Todoadd from "../todolist/Todoadd";
import Todosearch from "../todolist/Todosearch";
import Footer from "../todolist/Footer";

const Todolist = (props) => {
  const [filteredData, setfilteredData] = useState([]);
  const [isDataUpdate, setIsDataUpdate] = useState([]);
  const [filterArray, setFilterArray] = useState([]);
  const [change, setChange] = useState("");

  useEffect(() => {
    setfilteredData(props.data);
  }, [isDataUpdate]);

  const onSaveTodoData = (enteredTodoData, i) => {
    const todoData = {
      ...enteredTodoData,
      id: Math.random().toString(),
    };
    setfilteredData((prevTodoData) => {
      return[...prevTodoData,todoData];
    });
  };
  const Searchdata = (inputValue) => {
    if (inputValue.trim().length > 0) {
      let searchFilteredData = filteredData.filter((searchItem) => {
        if (inputValue.trim().length === 0) {
          return searchItem;
        } else {
          return searchItem.value.toLowerCase().includes(inputValue);
        }
      });
      // if(searchFilteredData.length === 0){
      //   setIsDataUpdate([]);
      // } else {
      //   setfilteredData(searchFilteredData);
      // }
      setfilteredData(searchFilteredData);
      // setIsDataUpdate(filteredData);
    } else {
      setIsDataUpdate(filteredData);
    }
    setIsDataUpdate(filteredData);
  };

  const handleClick = (changeState) => {
    if (change === "") {
      setChange(changeState);
    }
    if (change !== changeState) {
      setChange(changeState);
    } else {
      setChange("");
    }
  };
  const onDeleteUser = (dataId) => {
    const deleteUserData = filteredData.filter(data1 => data1.id !==  dataId);
    setfilteredData(deleteUserData);
  };
  const footerChangeFn = (footerCurrentState) => {
    if(footerCurrentState === 'all'){
      setfilteredData(props.data)
    }
    if(footerCurrentState === 'completed'){
      const completedData = filteredData.filter((item) =>{
        return item.isChecked === true;
      });
      setfilteredData(completedData)
    }
    if(footerCurrentState == 'active'){
      const activeData = filteredData.filter((item) =>{
        return item.isChecked === false;
      });
      setfilteredData(activeData)
    }
    console.log(footerCurrentState);
    // setChange(footerCurrentState);
    // props.handleFooterClick(footerCurrentState);
  };
  const checkedUpdatedItem = (itemId) => {
    const updatedData = props.data.map((item) => {
      return item.id === itemId ? {...item,isChecked : !item.isChecked} : item;
    })
    console.log(updatedData);
    setfilteredData(updatedData);
  }

  return (
    <div>
      {console.log(filteredData)}
      <Card className="todolist">
        <h1>Things To Do</h1>

        {(() => {
          switch (change) {
            case "add":
              return <Todoadd onSaveTodoData={onSaveTodoData} />;
            case "search":
              return <Todosearch  Searchdata={Searchdata} />;
            default:
              return null;
          }
        })()}
        {/* <TodolistItem data={props.data} filteredData={filteredData} onDeleteUser={onDeleteUser} onChangeFooter ={change} /> */}
        <ul className="todolistitem">
          {filteredData.map((dataitem, i) => (
            <li key={i}>
             <TodolistItem dataitem={dataitem} checkedUpdatedItem={checkedUpdatedItem} onDeleteUser={onDeleteUser}/>
            </li>
          ))}
        </ul>
        <Footer
          handleClick={handleClick}
          data={filteredData}
          footerChangeFn={footerChangeFn}
        />
      </Card>
    </div>
  );
};
export default Todolist;
