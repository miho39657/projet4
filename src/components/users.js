import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  const [users,setUsers]= useState([]);
  useEffect(() => {axios.get("/data/users.json").then(res => setUsers(res.data))},[]);

  return (
    <>
    {users.map((elem,index) => <h1 key={index}> {elem.name} {elem.age}  </h1> )}
    </>
  )
}
export default Users
