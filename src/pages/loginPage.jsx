import React from 'react'
import Login from '../components/auth/Login'
import { Link } from 'react-router-dom'
function loginPage() {
  return (
    <>
    <div>
    <div className="flex justify-center items-center h-screen">
      <div className="bg-stone-800 shadow-lg rounded-lg px-28	"  style={{width: "50%", height: "500px"}}>
        <div className='text-center text-new_white text-xl h-24 pt-10'>
        <span >Login</span>
        </div>
      <Login/>
      <div className='text-center text-new_white text-xl h-24 pt-10'>
        <p>Don't Have A Account 😔 ?
          <Link to={"/singup"} className='text-custom_Orang hover:underline '>&nbsp;Singup&nbsp;</Link>
        </p>
        </div>
      </div>
</div>


    </div>
    </>
  )
}

export default loginPage