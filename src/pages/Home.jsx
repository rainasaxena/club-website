import React from 'react'
import logo from '../assets/logo.png'

const Home = () => {
  return (
    <div className='font-semibold text-4xl text-grey h-[100vh]'>
        <div className='flex justify-center m-[75px]'>
            <img src={logo} alt="" />
        </div>
        <h1>Welcome to Mathematics Club, VIT Chennai </h1>
        <h1 className="text-pink mt-[20px]">Where logic meets creativity</h1>
    </div>
  )
}

export default Home