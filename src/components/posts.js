import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Posts() {
  const [users,setUsers]= useState([]);
  useEffect(() => {axios.get("https://jsonplaceholder.typicode.com/posts").then(res => setUsers(res.data))},[]);
  console.log(users);

  return (
    <>
    {users.map((elem,index) => <h1 key={index}> {elem.title} {elem.body}  </h1> )}
    </>
  )
}
export default Posts