import React from 'react'
import {useForm} from 'react-hook-form'

const EditUserForm = (props) => {

const { handleSubmit, register, formState: { errors }, setValue } = useForm({
  defaultValues : props.currentUser
});

const onSubmit = (data,e) => {
  // console.log(data)
  data.id = props.currentUser.id
  props.updateUser(props.currentUser.id,data)
  e.target.reset()
}

  setValue("name",props.currentUser.name)
  setValue("username",props.currentUser.username)
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
      <button>Edit User</button>
    </form>
    </>
  );
}

export default EditUserForm