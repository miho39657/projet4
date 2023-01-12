import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Posts() {
  const [posts,setPosts]= useState([]);
  useEffect(() => {axios.get("https://jsonplaceholder.typicode.com/posts").then(res => setPosts(res.data))},[]);

  return (
    <>
    {posts.map((elem,index) => <div key={index}> <h1>{elem.title}</h1> <p>{elem.body}</p>  </div> )}
    </>
  )
}
export default Posts

