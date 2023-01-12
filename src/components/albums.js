import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Albums() {
  const [albums,setAlbums]= useState([]);
  useEffect(() => {axios.get("https://jsonplaceholder.typicode.com/albums").then(res => setAlbums(res.data))},[]);
  console.log(users);

  return (
    <>
    {users.map((elem,index) => <h1 key={index}> {elem.title}  </h1> )}
    </>
  )
}
export default Albums