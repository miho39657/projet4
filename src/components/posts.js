import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Posts() {
  const [posts,setPosts]= useState([]);
  useEffect(() => {axios.get("https://jsonplaceholder.typicode.com/posts").then(res => setPosts(res.data))},[]);

  return (
    <> 
      <div className='row row-cols-1 row-cols-md-4 g-4'>
      {posts.map((elem,index) => 
        <div className='col'>
          <div className="card h-100 w-100">
            <div class="card-header header-post">
            <h4>{elem.title}</h4>
            </div>
            <div className="card-body body-post" key={index}>
              <p class="card-text">{elem.body}</p>
            </div>
          </div>
        </div> 
      )}
      </div>
    </>
)}
export default Posts

