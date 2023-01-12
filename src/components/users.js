import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  const [users,setUsers]= useState([]);
  useEffect(() => {axios.get("https://jsonplaceholder.typicode.com/users").then(res => setUsers(res.data))},[]);
  console.log(users);

  return (
    <>
    {users.map((elem,index) => <h1 key={index}> {elem.name} {elem.email}  </h1> )}
    </>
  )
}
export default Users
