import React from 'react';
import { Link} from 'react-router-dom';
import InputBar from './components/common/inputBar'
import Button from './components/common/BUTTON'

const App = () => {
   return (
    <>
    <nav className="flex items-center justify-between p-6">
      <div className="text-3xl font-bold text-orange-500">MY_HACK</div>
      <div className="flex space-x-8 text-gray-400">
        <Link to={"/singup"} className="hover:text-white">Home</Link>
        <Link to={"/singup"} className="hover:text-white">About</Link>
        <Link to={"/singup"} className="hover:text-white">Blogs</Link>
        <Link to={"/singup"} className="hover:text-white">Guide</Link>

      </div>
      <div className="flex space-x-4">
        
        <Link to={"/singup"} className="px-4 py-2 bg-custom_Orang  rounded hover:bg-yellow-500 ">Get Started</Link>
        <Link to={"/login"} className="px-4 py-2 bg-custom_Gray rounded hover:bg-gray-600">login</Link>
      </div>
    </nav>


    <div className="flex flex-col items-center mt-16">
      <div className="flex space-x-4 mb-8">
        <Button className="px-6 py-2 bg-orange-600 rounded hover:bg-orange-700">Hackathon</Button>
        <Button className="px-6 py-2 bg-gray-700 rounded hover:bg-gray-600" backgroundColor='custom_Gray'>Teams</Button>
      </div>
      <div className="relative w-1/2">
        <InputBar type={"text"} placeholder={"Search"} className={"w-full px-4 py-2 text-black rounded"} />
        <div className="absolute top-0 right-0 mt-2 mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 10-14 0 7 7 0 0014 0z" />
          </svg>
        </div>
      </div>
    </div>
    <style>
      {
        `
        .gradient-text {
    background: linear-gradient(130deg, rgba(255, 255, 255, 1) 0%, rgba(153, 153, 153, 0.56) 49%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.my-Hack-animation span {
  letter-spacing: 5px;
  opacity: 0;
  animation: amin 2s forwards infinite;
}

@keyframes amin {
  0% {
    opacity: 0;
    transform: rotateY(-100deg);
    filter: blur(5px);
  }
  100% {
    opacity: 1;
    transform: rotateY(0deg);
    filter: blur(px);
  }
}
.my-Hack-animation span:nth-child(1) {
  animation-delay: 0s;
  opacity: 1;
}
.my-Hack-animation span:nth-child(2) {
  animation-delay: 0.1s;
  opacity: 1;
}
.my-Hack-animation span:nth-child(3) {
  animation-delay: 0.2s;
  opacity: 1;
}
.my-Hack-animation span:nth-child(4) {
  animation-delay: 0.3s;
  opacity: 1;
}   
.my-Hack-animation span:nth-child(5) {
  animation-delay: 0.4s;
  opacity: 1;
}   
.my-Hack-animation span:nth-child(6) {
  animation-delay: 0.5s;
  opacity: 1;
}   
.my-Hack-animation span:nth-child(7) {
  animation-delay: 0.6s;
  opacity: 1;
}   
.my-Hack-animation span:nth-child(8) {
  animation-delay: 0.7s;
  opacity: 1;
}   
.my-Hack-animation span:nth-child(9) {
  animation-delay: 0.8s;
  opacity: 1;
}   
.my-Hack-animation span:nth-child(10) {
  animation-delay: 0.9s;
  opacity: 1;
}   
.my-Hack-animation span:nth-child(10) {
  animation-delay: 1s;
  opacity: 1;
}   
.my-Hack-animation span:nth-child(11) {
  animation-delay: 1.1s;
  opacity: 1;
}   
.my-Hack-animation span:nth-child(12) {
  animation-delay: 1.2s;
  opacity: 1;
}   
.my-Hack-animation span:nth-child(13) {
  animation-delay: 1.3s;
  opacity: 1;
}   
.my-Hack-animation span:nth-child(14) {
  animation-delay: 1.4s;
  opacity: 1;
}   
.my-Hack-animation span:nth-child(15) {
  animation-delay: 1.5s;
  opacity: 1;
}   

        `
      }
    </style>


{/* <div class="flex justify-center items-start">
    <div class="text-center text-white">
      <span class="text-6xl font-bold mb-4 items-start	">Welcome to My Hack</span>
    </div>



  </div> */}
  <div className='flex justify-center '>
  <p className="text-4xl text-new_white text-6xl font-bold mb-4 items-start	text-white my-Hack-animation">
      <span>W</span>
      <span>e</span>
      <span>l</span>
      <span>c</span>
      <span>o</span>
      <span>m</span>
      <span>e </span> 
      <span>t</span>
      <span>o</span> 
      <span> M</span>
      <span>y</span> 
      <span> H</span>
      <span>a</span>
      <span>c</span>
      <span>k</span>
  </p> 
  </div>
  
  <div className='flex justify-center'>
  <p className='text-5xl' style={{margin: "0 0 0 -350px"}}>
    <span className='text-white'> Find Your </span> <span className='text-New_pink'> Hackathon </span ><br /> <span className='text-white'>Right</span> <span className='text-custom_Orang'>Now</span>
  </p>
  </div>
 
    </>


);
};

export default App;
