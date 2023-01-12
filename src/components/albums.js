import React from "react";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Albums() {
  const [users,setUsers]= useState([]);
  useEffect(() => {axios.get("https://jsonplaceholder.typicode.com/albums").then(res => setUsers(res.data))},[]);
  console.log(users);

  return (
    <>
    {users.map((elem,index) => <h1 key={index}> {elem.name} {elem.email}  </h1> )}
    </>
  )
}
export default Albums