import React from 'react'
import { useState, useEffect } from 'react';
import profile from '../assets/profile1.jpg'
import download from '../assets/download.png'
import './Home.css'
import { database } from '../firebase';
import { ref, onValue } from "firebase/database";
import linkdin from '../assets/linkedin.png'
import github from '../assets/github.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-scroll";
import { motion, useScroll } from 'motion/react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [showBadge, setShowBadge] = useState(false);
  return (
    <>
      <div className="main flex flex-col lg:flex-row-reverse items-center lg:justify-between gap-10 lg:gap-20 p-4 lg:p-10 lg:px-20  min-h-screen lg:mb-14">
        <motion.div initial={{scale: 0.5, opacity: 0}} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.5 }} className="left w-[60%]">
          <img className='profile-img w-[100%] lg:mb-8' src={profile} alt="" />
        </motion.div>
        <div className="right w-[100%] lg:w-[100%] h-[100%] flex flex-col justify-center items-start lg:pr-4">
          <motion.h1 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} className='text-[40px] md:text-[50px] font-bold'>Hi, it's <span className='text-[var(--main-color)]'>Danish</span></motion.h1>
          <motion.h2 initial={{ x: -150, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.4 }} className='text-[20px] md:text-[25px] font-bold'>I'm a <span className='text-[var(--main-color)]'></span></motion.h2>
          <motion.p initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className='text-justify sm:text-left '>Welcome to my portfolio! I'm a web developer passionate about creating dynamic, responsive, and user-friendly web applications. With expertise in React, JavaScript, and modern web technologies, I build seamless digital experiences. Explore my projects, skills, and services, and feel free to connect with me for collaboration or inquiries! 🚀</motion.p>
          <div className="social w-full flex gap-6 pt-4 mb-5">
            <motion.a initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} target="_blank" href='https://www.linkedin.com/in/md-danish-63312b309/'><span className='p-4 w-10 h-10 border-2 flex justify-center items-center border-[var(--main-color)] rounded-full text-[var(--main-color)] hover:text-white hover:translate-y-[-5px] hover:scale-110 hover:bg-[var(--main-color)] transition-all'><FontAwesomeIcon color='' size='lg' icon={faLinkedin} /></span></motion.a>
            <motion.a initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} target="_blank" href='https://github.com/Danish0111'><span className='p-4 w-10 h-10 border-2 flex justify-center items-center border-[var(--main-color)] rounded-full text-[var(--main-color)] hover:text-white hover:translate-y-[-5px] hover:scale-110 hover:bg-[var(--main-color)] transition-all'><FontAwesomeIcon color='' size='lg' icon={faGithub} /></span></motion.a>
            <motion.a initial={{ y: 150, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.4 }} target="_blank" href='https://x.com/MdDanish1664492'><span className='p-4 w-10 h-10 border-2 flex justify-center items-center border-[var(--main-color)] rounded-full text-[var(--main-color)] hover:text-white hover:translate-y-[-5px] hover:scale-110 hover:bg-[var(--main-color)] transition-all'><FontAwesomeIcon color='' size='lg' icon={faTwitter} /></span></motion.a>
          </div>
          <div className='flex items-center gap-8'>
            <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="hire_btn">
              <Link  to="contact" smooth={true} duration={500} spy={true} offset={-30}  className='hire_link hidden md:block w-full hover:cursor-pointer bg-[var(--main-color)] text-black px-5 py-2 rounded-full transition-all'>
                <button className='font-semibold '>
                  Hire Me
                </button>
              </Link>
              <NavLink  to="/contact" smooth={true} duration={500} spy={true} offset={-30}  className='hire_link block md:hidden w-full hover:cursor-pointer bg-[var(--main-color)] text-black px-5 py-2 rounded-full transition-all'>
                <button className='font-semibold '>
                  Hire Me
                </button>
              </NavLink>
            </motion.div>
            <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="download_btn relative">
              <a onMouseEnter={()=> setShowBadge(true)} onMouseLeave={()=> setShowBadge(false)} href="/resume.pdf" download>
                <button>
                  <img className='w-8' src={download} alt="" />
                </button>
              </a>
              {showBadge && <div className="badge w-[130px] p-1 flex justify-center bg-gray-800 border-2 border-gray-600 rounded-xl absolute top-0 left-10 text-xs text-gray-400">Download Resume</div>}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
