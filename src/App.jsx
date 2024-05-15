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
        <Button className="px-6 py-2 bg-gray-700 rounded hover:bg-gray-600">Teams</Button>
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

    <div className="flex flex-col items-center mt-16 text-center">
      <h1 className="text-5xl font-bold">
        Welcome TO MY <span className="text-gray-300">HACK</span>
      </h1>
      <p className="mt-4 text-4xl">
        Find Your <span className="text-pink-400">Hackathon</span> <span className="text-gray-300">Right</span> <span className="text-orange-500">Now</span>
      </p>
    </div>

    <div className="flex justify-center mt-16">
      <div className="relative">
        <div className="absolute top-0 left-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-48 w-48 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 10-14 0 7 7 0 0014 0z" />
          </svg>
        </div>
        <div className="absolute top-12 left-12 text-5xl font-bold text-gray-300">HACK</div>
      </div>
    </div>

    </>

);
};

export default App;
