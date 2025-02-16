import React from 'react'
import profile from '../assets/profile.png'
import './Home.css'
const Home = () => {

  return (
    <>
      <div className="main flex flex-col lg:flex-row items-center justify-center p-4 lg:p-10 min-h-screen lg:min-h-[100%] mb-20">
        <div className="left w-[60%] lg:w-[50%] flex justify-center items-center">
            <img className='w-[100%] md:w-[60%]' src={profile} alt="" />
        </div>
        <div className="right w-[100%] lg:w-[60%] flex flex-col justify-center items-start lg:pr-4">
            <h1 className='text-[40px] md:text-[50px] font-bold'>Hi, it's <span className='text-[#d82d25]'>Danish</span></h1>
            <h2 className='text-[20px] md:text-[25px] font-bold'>I'm a <span className='text-[#d82d25]'>Web Developer</span></h2>
            <p className='text-justify sm:text-left '>Welcome to my portfolio! I'm a web developer passionate about creating dynamic, responsive, and user-friendly web applications. With expertise in React, JavaScript, and modern web technologies, I build seamless digital experiences. Explore my projects, skills, and services, and feel free to connect with me for collaboration or inquiries! 🚀</p>
        </div>
      </div>
    </>
  )
}

export default Home
