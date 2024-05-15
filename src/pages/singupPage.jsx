import React from 'react'
import Singup from '../components/auth/Singup'
import { Link } from 'react-router-dom'
function singupPage() {
  return (
    <>
    <div>
    <div className="flex justify-center items-center h-screen">
      <div className="bg-stone-800 shadow-lg rounded-lg px-28	"  style={{width: "50%", height: "500px"}}>
        <div className='text-center text-new_white text-xl h-24 pt-10'>
        <span >Singup</span>
        </div>
      <Singup/>
      <div className='text-center text-new_white text-xl h-24 pt-10'>
        <p>Already Have Account 😊 ?
          <Link to={"/login"} className='text-custom_Orang hover:underline '>Login</Link>
        </p>
        </div>
      </div>
</div>


    </div>
    </>
  )
}

export default singupPage