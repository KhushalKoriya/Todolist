import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import "./Todolist.css";
import TodolistItem from "../todolist/Todolistitem";
import Todoadd from "../todolist/Todoadd";
import Todosearch from "../todolist/Todosearch";
import Footer from "../todolist/Footer";

const Todolist = (props) => {
  const [data, setData] = useState([]);
  const [filteredData, setfilteredData] = useState(data);
  // const [isDataUpdate, setIsDataUpdate] = useState([]);
  const [change, setChange] = useState('add');

  useEffect(() => {
    setData(props.data);
    setfilteredData(props.data);
  }, []);

  const onSaveTodoData = (enteredTodoData, i) => {
    const todoData = {
      ...enteredTodoData,
      id: Math.random().toString(),
    };
    setfilteredData((prevTodoData) => {
      return [...prevTodoData, todoData];
    });
    setData((prevTodoData) => {
      return [...prevTodoData, todoData];
    });
  };
  const Searchdata = (inputValue) => {
    const filterItems = data.filter((item) => {
      return item.value.toLowerCase().indexOf(inputValue.toLowerCase()) > -1; // true
    });
    setfilteredData(filterItems);
    console.log(filterItems);
  };

  const handleClick = (changeState) => {
    if (change === "") {
      setChange(changeState);
    }
    if (change !== changeState) {
      setChange(changeState);
      setfilteredData(data)
    } else {
      setChange("");
    }
  };
  const onDeleteUser = (dataId) => {
    const deleteUserData = filteredData.filter((data1) => data1.id !== dataId);
    setfilteredData(deleteUserData);
    setData(deleteUserData);
  };
  const footerChangeFn = (footerCurrentState) => {
    if (footerCurrentState === "all") {
      setfilteredData(data);
      // setData((prevTodoData) => {
      //   return [...prevTodoData];
      // });
      console.log(data);
    }
    if (footerCurrentState === "completed") {
      const completedData = data.filter((item) => {
        return item.isChecked === true;
      });
      setfilteredData(completedData);
      setData((prevTodoData) => {
        return [...prevTodoData];
      });
      // setData(completedData);
      console.log(data);
      // setData((prevTodoData) => {
      //   return [...prevTodoData, data];
      // });
    }
    if (footerCurrentState == "active") {
      const activeData = data.filter((item) => {
        return item.isChecked === false;
      });
      setfilteredData(
       activeData
      );
      setData((prevTodoData) => {
        return [...prevTodoData];
      });
      // console.log( [...data, activeData]);
      // setData((prevTodoData) => {
      //   return [...prevTodoData, data];
      // });
    }
    // console.log(footerCurrentState);
    // setChange(footerCurrentState);
    // props.handleFooterClick(footerCurrentState);
  };
  const checkedUpdatedItem = (itemId) => {
    const updatedData = filteredData.map((item) => {
      return item.id === itemId
        ? { ...item, isChecked: !item.isChecked }
        : item;
    });
   
    console.log(updatedData);
    setfilteredData(updatedData);
    setData(updatedData); 
  };

  return (
    <div>
      <Card className="todolist">
        <h1>Things To Do</h1>

        {(() => {
          switch (change) {
            case "add":
              return <Todoadd onSaveTodoData={onSaveTodoData} />;
            case "search":
              return <Todosearch Searchdata={Searchdata} />;
            default:
              return null;
          }
        })()}
        {/* <TodolistItem data={props.data} filteredData={filteredData} onDeleteUser={onDeleteUser} onChangeFooter ={change} /> */}
        <ul className="todolistitem">
          {filteredData.map((dataitem, i) => (
            <li key={i}>
              <TodolistItem
                dataitem={dataitem}
                checkedUpdatedItem={checkedUpdatedItem}
                onDeleteUser={onDeleteUser}
              />
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
