import './index.css';
import React, {useState} from 'react'
import UserTable from './components/UserTable';
import {v4 as uuidv4} from 'uuid';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  var userData = [
    {id: uuidv4() , name: "Tania", username:"floppydiskette"},
    {id: uuidv4() , name: "Craig", username:"siliconeidolon"},
    {id: uuidv4() , name: "Ben", username:"benisphere"},
  ]

  const [users, setUsers] = useState(userData);

  //Agregar usuario 

  const addUser = (user) => { 
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  //Eliminar usuarios
  const deleteUser = (id_x) => {
    const newArray = users.filter((user)=>{
      return user.id != id_x;
    })
    setUsers(newArray)
  }

  // Editar Usuarios
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(
    {id:null,name:"",username:"",}
  );

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
    })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }

  return (
    <>
    <div className="container">
      <h1>CRUD App with hooks</h1>
      <hr/>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <>
            <h2>Edit user</h2>
            <EditUserForm
            updateUser={updateUser}
            currentUser={currentUser}
            />
            </>
          ) : (
            <>
            <h2>Add user</h2>
            <AddUserForm addUser={addUser}/>
            </>
          )}
        </div>
      <div className="flex-large">
        <h2>View Users</h2>
        <UserTable
        users={users}
        editRow={editRow}
        deleteUser={deleteUser}/>
      </div>
      </div>
    </div>
    </>
  );
}

export default App;
