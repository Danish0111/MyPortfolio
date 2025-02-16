import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import linkdin from '../assets/linkedin.png'
import github from '../assets/github.png'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faContactBook, faFolder, faGraduationCap, faHome, faLightbulb, faEnvelope  } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Navbar = () => {
    const location = useLocation(); // Get current route
    const [indicatorPosition, setIndicatorPosition] = useState(0);

    useEffect(() => {
        const activeLink = document.querySelector('.mobile_navigation ul li .active-link');
        if (activeLink) {
            const parentLi = activeLink.closest('li');
            setIndicatorPosition(parentLi.offsetLeft); // Set indicator position dynamically
        }
    }, [location.pathname]); // Runs when route changes
    return (
        <>
            <nav className='flex justify-between items-center px-5 sm:px-10 lg:px-28 py-5'>
                <div className="logo text-3xl font-bold text-[#d82d25]">MD. DANISH</div>
                <ul className='hidden lg:flex items-center gap-[20px] lg:gap-[50px]'>
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills" className={({ isActive }) => (isActive ? 'active-link' : '')}>Skills</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active-link' : '')}>Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/education" className={({ isActive }) => (isActive ? 'active-link' : '')}>Education</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active-link' : '')}>Contact</NavLink>
                    </li>
                </ul>
                <div className="social flex items-end gap-3 relative lg:left-8">
                    <a href="https://www.linkedin.com/in/md-danish-63312b309/">
                        <FontAwesomeIcon icon={faLinkedin} size='2x'/>
                    </a>
                    <a href="https://github.com/Danish0111">
                        <FontAwesomeIcon icon={faGithub} size='2x'/>
                    </a>
                </div>

                <div className="lg:hidden mobile_navigation">
                    <ul className='flex justify-around items-center gap-[10px] sm:gap-[20px] lg:gap-[50px] w-[100%] '>
                        <li>
                            <NavLink to="/" className={({ isActive }) => `flex justify-center items-center flex-col relative ${isActive ? 'active-link' : ''}`}>
                                <span className="icon text-[#d82d25]"><FontAwesomeIcon className='text-2xl md:text-3xl' icon={faHome}/></span>
                                <span className="text font-semibold">Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/skills" className={({ isActive }) => `flex justify-center items-center flex-col relative ${isActive ? 'active-link' : ''}`}>
                                <span className="icon text-[#d82d25]"><FontAwesomeIcon className='text-2xl md:text-3xl' icon={faLightbulb}/></span>
                                <span className="text font-semibold">Skills</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects" className={({ isActive }) => `flex justify-center items-center flex-col relative ${isActive ? 'active-link' : ''}`}>
                                <span className="icon text-[#d82d25]"><FontAwesomeIcon className='text-2xl md:text-3xl' icon={faFolder}/></span>
                                <span className="text font-semibold">Projects</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/education" className={({ isActive }) => `flex justify-center items-center flex-col relative ${isActive ? 'active-link' : ''}`}>
                                <span className="icon text-[#d82d25]"><FontAwesomeIcon className='text-2xl md:text-3xl' icon={faGraduationCap}/></span>
                                <span className="text font-semibold">Education</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) => `flex justify-center items-center flex-col relative ${isActive ? 'active-link' : ''}`}>
                                <span className="icon text-[#d82d25]"><FontAwesomeIcon className='text-2xl md:text-3xl' icon={faEnvelope}/></span>
                                <span className="text font-semibold">Contact</span></NavLink>
                        </li>
                        <div className="indicator" style={{ left: `${indicatorPosition}px` }}></div>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
