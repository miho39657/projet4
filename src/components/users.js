import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  const [users,setUsers]= useState([]);
  useEffect(() => {axios.get("https://jsonplaceholder.typicode.com/users").then(res => setUsers(res.data))},[]);

  return (
    <>
      <div className='row row-cols-1 row-cols-md-4 g-4'>
        {users.map((elem,index) => 
          <div className='col'>
                  <div className="card h-100" key={index}> 
                    <img src="..\Images\user_img.png" className="card-img-top" alt="..."/>
                      <div className='card-body'>
                        <h5 className='card-title'>{elem.name}</h5> 
                        <h6 className='card-subtitle mb-2 text-muted'>{elem.username}</h6> 
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item"><i class="fa fa-envelope"></i> {elem.email}</li>
                            <li className="list-group-item"><i class="fa fa-map-marker"></i> {elem.address.city}</li>
                            <li className="list-group-item"><i class="fa fa-globe"></i> {elem.website}</li>
                          </ul>
                      </div>
                  </div>
          </div>  
        )}        
        
      </div>


      {/* <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <img src="..\Images\user_img.jpg" class="card-img-top"
              alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}
export default Users
