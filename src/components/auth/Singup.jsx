import React, { useState,useId } from 'react';
import { useForm } from 'react-hook-form';
import Appwrite from './APP'
import InputBar from '../common/inputBar'
import Button from '../common/BUTTON'



function Signup() {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const id = useId()
  const onSubmit = async (data) => {
    console.log(data.email,data.password)
    try {
      setLoading(true); // Set loading state to true when form is submitted
      await Appwrite.creatAcount(data)
      await Appwrite.Appuser(data)
      console.log("Login successfull")
      setLoading(false); // Set loading state to false after account creation
      console.log("Signup successful");
    } catch (error) {
      console.log("Error occurred:", error);
      setLoading(false); // Set loading state to false if there's an error
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputBar
        id={id}
        Placeholder={"enter your email"}
        type={"email"}
        autoComplete={"email"}
        {...register('email', {
          required: true,
          pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          message: "Please enter a valid email address",
        })}
       
      />  
      <InputBar
        id={id}
        placeholder={'Enter your password'}
        type={"password"}
        autoComplete={"new-password"}
        {...register('password', {
          required: true,
          minLength: 6,
          message: "Password must be at least 6 characters long",
        })}
       
      />
      <InputBar
        id={id}
        placeholder={'Enter your name'}
        type={"text"}
        autoComplete={"name"}
        {...register('name', { required: true })}
      />
      <Button
      children={loading ? "Loading..." : "Signup"}
      type={'submit'}
      />
    </form> 
    </>

  );
}

export default Signup;
