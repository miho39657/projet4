import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Posts() {
  const [posts,setPosts]= useState([]);
  useEffect(() => {axios.get("https://jsonplaceholder.typicode.com/posts").then(res => setPosts(res.data))},[]);

  return (
    <>
    {posts.map((elem,index) => <div className='card' key={index}> <h1 className='h2'>{elem.title}</h1> <p className='h3 text-muted'>{elem.body}</p>  </div> )}
    </>
  )
}
export default Posts

