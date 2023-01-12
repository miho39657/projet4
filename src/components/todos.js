import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Todos() {
  const [todos,setTodos]= useState([]);
  useEffect(() => {axios.get("https://jsonplaceholder.typicode.com/todos").then(res => setTodos(res.data))},[]);

  return (
    <>
    {todos.map((elem,index) => <div key={index}> <h1>{elem.title} {elem.completed? <span>done</span> : ""}</h1>  </div> )}
    </>
  )
}
export default Todos


