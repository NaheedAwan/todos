// import logo from './logo.svg';
// import './App.css';

import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import TodoItem from "./MyComponents/TodoItem";
import React, { useState } from "react";
import AddTodo from "./AddTodo";

function App() {
  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
const addTodo = (title, desc) =>{
  console.log("I'm adding title and desc")
  let sn 
  if(todos.length==0){
    sn=0
  } else{
    sn = todos[todos.length-1].sn+1
  }
 
  const myTodo = {
    title: title,
    desc: desc,
    sn: sn,
  } 
  setTodos([...todos, myTodo])
  console.log(myTodo)
}


  let [todos, setTodos] = useState([
    {
      sn: 1,
      title: "Cook food",
      desc: "You have to Bake chicken today",
    },
    {
      sn: 2,
      title: "Do Programming",
      desc: "You have to spend 1 hour today revising JavaScript",
    },
    {
      sn: 3,
      title: "Exercise",
      desc: "Walk atleast 3 Miles today",
    },
  ]);
  return (
    <>
      <Header title="My Todos List" />
      <Todos todos={todos} onDelete={onDelete} />
      <AddTodo addTodo={addTodo} />
      <Footer />
    </>
  );
}
export default App;
