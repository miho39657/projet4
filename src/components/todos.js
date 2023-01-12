import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Todos() {
  const [todos,setTodos]= useState([]);
  useEffect(() => {axios.get("https://jsonplaceholder.typicode.com/todos").then(res => setTodos(res.data))},[]);

  return (
    <>
    <div className='row row-cols-1 row-cols-md-2 g-4'>
        {todos.map((elem,index) =>  
          <div className='col'>
            <div className="card h-100 w-100">
              <div className="card-body" key={index}>
                <h5 className="card-title">{elem.title}</h5>
                {elem.completed? <h4><span className="badge bg-success">Done</span></h4> : <h4><span className="badge bg-warning">Wanting</span></h4>}
              </div>
            </div>
          </div> 
        )}
    </div>
    </>
  )
}
export default Todos


