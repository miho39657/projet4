import React, { useState } from 'react';
import axios from 'axios';
import usersj from './data/users.json';

function Users() {
  const [users,setUsers]= useState([]);
  useEffect(() => {axios.get(usersj).then(res => setUsers(res.data))},[]);

  return (
    <>
    {users.map(elem => <h1> {elem.name} {elem.age}  </h1> )}
    </>
  )
}
export default Users
