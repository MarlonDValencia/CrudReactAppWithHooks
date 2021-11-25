import './index.css';
import React, {useState} from 'react'
import UserTable from './components/UserTable';
import {v4 as uuidv4} from 'uuid';

function App() {
  const userData = [
    {id: uuidv4() , name: "Tania", username:"floppydiskette"},
    {id: uuidv4() , name: "Craig", username:"siliconeidolon"},
    {id: uuidv4() , name: "Ben", username:"benisphere"},
  ]

  const [users, setUsers] = useState(userData);

  return (
    <>
    <div className="container">
      <h1>CRUD App with hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
      <div className="flex-large">
        <h2>View Users</h2>
        <UserTable users={users}/>
      </div>
      </div>
    </div>
    </>
  );
}

export default App;
