import React from 'react'
import profile from '../assets/profile.png'
import './Home.css'
const Home = () => {
  return (
    <>
      <div className="main flex justify-center p-10">
        <div className="left w-[50%] flex justify-center items-center">
            <img className='w-[60%]' src={profile} alt="" />
        </div>
        <div className="right w-[60%] flex flex-col justify-center items-start pr-4">
            <h1 className='text-[50px] font-bold'>Hi, it's <span className='text-[#d82d25]'>Danish</span></h1>
            <h2 className='text-[25px] font-bold'>I'm a <span className='text-[#d82d25]'>Web Developer</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, obcaecati. Eum distinctio ex sapiente quaerat similique facilis repellat, saepe totam corrupti odio commodi, nisi porro! Aspernatur quisquam inventore repudiandae nam.</p>
        </div>
      </div>
    </>
  )
}

export default Home
