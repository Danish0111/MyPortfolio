import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';
import {motion} from 'motion/react'

const Footer = () => {
    return (
        <motion.footer initial={{y: 100}} whileInView={{y: 0}} transition={{duration: 1}} viewport={{ once: true }} className='py-5 h-[100%] relative flex flex-col gap-5 md:gap-0 md:block px-5 md:px-0'>
            <div className="social w-full md:w-[5%] h-10 flex flex-row md:flex-col gap-2 md:px-4">
                <a target="_blank" href='https://www.linkedin.com/in/md-danish-63312b309/'><span className='p-4 w-10 h-10 border-2 flex justify-center items-center border-[var(--main-color)] rounded-full text-[var(--main-color)] hover:text-white hover:translate-y-[-5px] hover:scale-110 hover:bg-[var(--main-color)] transition-all'><FontAwesomeIcon color='' size='lg' icon={faLinkedin} /></span></a>
                <a target="_blank" href='https://github.com/Danish0111'><span className='p-4 w-10 h-10 border-2 flex justify-center items-center border-[var(--main-color)] rounded-full text-[var(--main-color)] hover:text-white hover:translate-y-[-5px] hover:scale-110 hover:bg-[var(--main-color)] transition-all'><FontAwesomeIcon color='' size='lg' icon={faGithub} /></span></a>
                <a target="_blank" href='https://x.com/MdDanish1664492'><span className='p-4 w-10 h-10 border-2 flex justify-center items-center border-[var(--main-color)] rounded-full text-[var(--main-color)] hover:text-white hover:translate-y-[-5px] hover:scale-110 hover:bg-[var(--main-color)] transition-all'><FontAwesomeIcon color='' size='lg' icon={faTwitter} /></span></a>
            </div>
            {/* <div className="line w-full h-[2px] bg-[var(--main-color)]"></div> */}
            <div className="footer_navigation md:mb-5">
                <nav className='w-[100%]'>
                    <ul className='flex min-md:hidden flex-col md:flex-row justify-center items-start md:items-center gap-[20px] lg:gap-[50px] text-gray-400'>
                        <li><NavLink to="/" className='hover:cursor-pointer link font-semibold hover:text-[var(--main-color)]'>About</NavLink></li>
                        <li><NavLink to="/skills" className='hover:cursor-pointer link font-semibold hover:text-[var(--main-color)]'>Skills</NavLink></li>
                        <li><NavLink to="/projects" className='hover:cursor-pointer link font-semibold hover:text-[var(--main-color)]'>Projects</NavLink></li>
                        {/* <li><NavLink to="/education" className='hover:cursor-pointer link font-semibold hover:text-[var(--main-color)]'>Education</NavLink></li> */}
                        <li><NavLink to="/contact" className='hover:cursor-pointer link font-semibold hover:text-[var(--main-color)]'>Contact</NavLink></li>
                    </ul>
                    <ul className='hidden min-lg:flex flex-col md:flex-row justify-center items-start md:items-center gap-[20px] lg:gap-[50px] text-gray-400'>
                        <li><Link to="home" smooth={true} duration={500} spy={true} offset={-100} className='hover:cursor-pointer link font-semibold hover:text-[var(--main-color)]'>About</Link></li>
                        <li><Link to="skills" smooth={true} duration={500} spy={true} offset={-100} className='hover:cursor-pointer link font-semibold hover:text-[var(--main-color)]'>Skills</Link></li>
                        <li><Link to="projects" smooth={true} duration={500} spy={true} offset={-50} className='hover:cursor-pointer link font-semibold hover:text-[var(--main-color)]'>Projects</Link></li>
                        {/* <li><Link to="education" smooth={true} duration={500} spy={true} offset={-100} className='hover:cursor-pointer link font-semibold hover:text-[var(--main-color)]'>Education</Link></li> */}
                        <li><Link to="contact" smooth={true} duration={500} spy={true} offset={-50} className='hover:cursor-pointer link font-semibold hover:text-[var(--main-color)]'>Contact</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="line block md:hidden w-full h-[2px] bg-[var(--main-color)]"></div>
            <div className="copyright md:p-2 mb-20 md:mb-0 flex justify-start md:justify-center items-center md:mt-4 text-sm font-medium text-gray-400">
                <span>&copy; <span>Md Danish</span> <span>|</span> <span>All Rights Reserved</span></span>
            </div>
        </motion.footer>
    )
}

export default Footer
