import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Posts() {
  const [users,setUsers]= useState([]);
  useEffect(() => {axios.get("/data/posts.json").then(res => setUsers(res.data))},[]);

  return (
    <>
    {users.map((elem,index) => <h1 key={index}> {elem.name} {elem.desc}  </h1> )}
    </>
  )
}
export default Posts
