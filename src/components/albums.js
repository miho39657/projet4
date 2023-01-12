import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Albums() {
  const [albums,setAlbums]= useState([]);
  useEffect(() => {axios.get("https://jsonplaceholder.typicode.com/albums").then(res => setAlbums(res.data))},[]);
  
  return (

<>
<div className='row row-cols-1 row-cols-md-2 g-4'>
    {albums.map((elem,index) => 
      <div className='col'>
        <div className="card h-100 w-100">
          <div className="card-body" key={index}>
            <h5 className="card-title">
              <h3>Album Title :</h3> 
              {elem.title}</h5>
          </div>
        </div>
      </div> 
    )}
</div>
</>
  )
}
export default Albums