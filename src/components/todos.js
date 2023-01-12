import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Todos() {
  const [todos,setTodos]= useState([]);
  useEffect(() => {axios.get("https://jsonplaceholder.typicode.com/todos").then(res => setTodos(res.data))},[]);

  return (
    <>
    {todos.map((elem,index) => <h1 key={index}> {elem.title} {elem.completed}  </h1> )}
    </>
  )
}
export default Todos


