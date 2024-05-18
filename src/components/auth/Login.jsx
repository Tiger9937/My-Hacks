import React, { useId, useState } from 'react'
import {useForm} from 'react-hook-form'
import Appwrite from './APP'
import InputBar from '../common/inputBar'
import Button from '../common/BUTTON'
import { useNavigate } from 'react-router-dom'




function Login() {
 const {register,handleSubmit}=useForm()
 const [loading,setLoading] = useState(false)
 const navigate = useNavigate()
 const id = useId() 

  const login = async (data)=>{
    try {
        setLoading(true)
        await Appwrite.Appuser(data)
        await Appwrite.Getuser()
        
        console.log(data,"Now user Login")
        setLoading(false)
        navigate("/")
        
    } catch (error) {
        console.log(error)
    }
}
  return (
<>
<form onSubmit={handleSubmit(login)} className='mt-8'>
    <div>
        
    <InputBar
        id={id}
        placeholder={"enter your email"}
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
    <Button
      children={loading ? "Loading..." : "Login"}
      type={'submit'}
      />
    </div>
</form>
     {/* <button
           type="button"
           onClick={async () => {
             await Appwrite.Deletuser()
             console.log("user successfully Loged out")
           }}
           >
           Logout
         </button> */}
</>
  )
}

export default Login