import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Posts() {
  const [posts,setPosts]= useState([]);
  useEffect(() => {axios.get("https://jsonplaceholder.typicode.com/posts").then(res => setPosts(res.data))},[]);

  return (
    <>
    {posts.map((elem,index) => <h1 key={index}> {elem.title} {elem.body}  </h1> )}
    </>
  )
}
export default Posts

