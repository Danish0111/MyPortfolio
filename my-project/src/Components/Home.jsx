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
import Particles from './Particles';

const Home = () => {
  const [showBadge, setShowBadge] = useState(false);
  return (
    <div className='flex flex-col justify-center items-center mt-20 px-2 md:px-10 lg:px-24 relative'>
      <div style={{ width: '100%', height: '100vh', position: 'absolute' }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={400}
          particleSpread={15}
          speed={0.1}
          particleBaseSize={105}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="main flex flex-col lg:flex-row-reverse items-center lg:justify-center gap-10 lg:gap-20 py-10 max-w-6xl lg:mb-14">
        <motion.img initial={{ scale: 0.5, opacity: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.5 }} className='profile-img lg:mb-8 max-sm:w-72 w-96 rounded-full z-0' src={profile} alt="" />
        <div className="right flex flex-col justify-center items-center lg:items-start lg:pr-4 max-md:px-0 max-lg:px-20">
          <motion.h1 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} className='text-[40px] md:text-[50px] font-bold'>Hi, it's <span className='text-[var(--main-color)]'>Danish</span></motion.h1>
          <motion.h2 initial={{ x: -150, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.4 }} className='text-[20px] md:text-[25px] font-bold'>I'm a <span className='text-[var(--main-color)]'></span></motion.h2>
          <motion.p initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className='text-center lg:text-justify '>Welcome to my portfolio! I'm a web developer passionate about creating dynamic, responsive, and user-friendly web applications. With expertise in React, JavaScript, and modern web technologies, I build seamless digital experiences. Explore my projects, skills, and services, and feel free to connect with me for collaboration or inquiries! 🚀</motion.p>
          <div className="social w-full flex justify-center lg:justify-start gap-6 pt-4 mb-5">
            <motion.a initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} target="_blank" href='https://www.linkedin.com/in/md-danish-63312b309/'><span className='p-4 w-10 h-10 border-2 flex justify-center items-center border-[var(--main-color)] rounded-full text-[var(--main-color)] hover:text-white hover:translate-y-[-5px] hover:scale-110 hover:bg-[var(--main-color)] transition-all'><FontAwesomeIcon color='' size='lg' icon={faLinkedin} /></span></motion.a>
            <motion.a initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} target="_blank" href='https://github.com/Danish0111'><span className='p-4 w-10 h-10 border-2 flex justify-center items-center border-[var(--main-color)] rounded-full text-[var(--main-color)] hover:text-white hover:translate-y-[-5px] hover:scale-110 hover:bg-[var(--main-color)] transition-all'><FontAwesomeIcon color='' size='lg' icon={faGithub} /></span></motion.a>
            <motion.a initial={{ y: 150, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.4 }} target="_blank" href='https://x.com/MdDanish1664492'><span className='p-4 w-10 h-10 border-2 flex justify-center items-center border-[var(--main-color)] rounded-full text-[var(--main-color)] hover:text-white hover:translate-y-[-5px] hover:scale-110 hover:bg-[var(--main-color)] transition-all'><FontAwesomeIcon color='' size='lg' icon={faTwitter} /></span></motion.a>
          </div>
          <div className='flex items-center gap-8'>
            <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="hire_btn">
              <Link to="contact" smooth={true} duration={500} spy={true} offset={-30} className='hire_link hidden md:block w-full hover:cursor-pointer bg-[var(--main-color)] text-black px-5 py-2 rounded-full transition-all'>
                <button className='font-semibold '>
                  Hire Me
                </button>
              </Link>
              <NavLink to="/contact" smooth={true} duration={500} spy={true} offset={-30} className='hire_link block md:hidden w-full hover:cursor-pointer bg-[var(--main-color)] text-black px-5 py-2 rounded-full transition-all'>
                <button className='font-semibold '>
                  Hire Me
                </button>
              </NavLink>
            </motion.div>
            <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="download_btn relative">
              <a onMouseEnter={() => setShowBadge(true)} onMouseLeave={() => setShowBadge(false)} href="/resume.pdf" download>
                <button>
                  <img className='w-8' src={download} alt="" />
                </button>
              </a>
              {showBadge && <div className="badge w-[130px] p-1 flex justify-center bg-gray-800 border-2 border-gray-600 rounded-xl absolute top-0 left-10 text-xs text-gray-400">Download Resume</div>}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
