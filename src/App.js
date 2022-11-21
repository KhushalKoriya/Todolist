import './App.css';
import React, { useState } from 'react';
import Todolist from './components/todolist/Todolist';

const dummydata=[{
  id:'1',
  value:'hello',
  isChecked : false
},
{
  id:'2',
  value:'test',
  isChecked : false
}]
function App() {
  const[data,setData]=useState(dummydata);

  // const onAddData=(todoData)=>{
  //     setData((prevTodoData) => {
  //       return[...prevTodoData,todoData];
  //     });
  // }
  return (
    <Todolist data={data}  />
  );
}

export default App;
