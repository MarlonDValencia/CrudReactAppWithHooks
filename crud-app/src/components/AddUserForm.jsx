import React from 'react'
import {useForm} from 'react-hook-form'

const AddUserForm = (props) => {

const { handleSubmit, register, formState: { errors } } = useForm();

const onSubmit = (data,e) => {
  // console.log(data)
  props.addUser(data)
  e.target.reset()
}

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input 
        type="text"
        name="name" 
        {...register("name", {required: true,message: "Error", minLength:2})}
      />
      <label>Username</label>
      <input
      type="text"
      name="username"
      {...register("username", {required: true,message: "Error",minLength:5})}
      />
      <button>Add New User</button>
    </form>
    </>
  );
}

export default AddUserForm