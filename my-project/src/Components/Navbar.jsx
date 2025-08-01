import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faGraduationCap, faHome, faLightbulb, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const [indicatorPosition, setIndicatorPosition] = useState(0);

    useEffect(() => {
        const activeLink = document.querySelector('.mobile_navigation ul li .active-link');
        if (activeLink) {
            const parentLi = activeLink.closest('li');
            setIndicatorPosition(parentLi.offsetLeft);
        }
    }, [location.pathname]);

    return (
        <nav className='flex justify-between items-center px-2 md:px-10 lg:px-24 py-5 sticky top-0 bg-black z-10'>
            <div className="logo text-3xl font-bold"><span>MD.</span> <span className='text-[var(--main-color)] last-name'>DANISH</span></div>
            <ul className='hidden md:flex items-center gap-[20px] lg:gap-[50px]'>
                <li><Link to="home" smooth={true} duration={500} spy={true} offset={-100} className='hover:cursor-pointer link font-semibold hover:text-[var(--main-color)]'>About</Link></li>
                <li><Link to="skills" smooth={true} duration={500} spy={true} offset={-100} className='hover:cursor-pointer link font-semibold hover:text-[var(--main-color)]'>Skills</Link></li>
                <li><Link to="projects" smooth={true} duration={500} spy={true} offset={-50} className='hover:cursor-pointer link font-semibold hover:text-[var(--main-color)]'>Projects</Link></li>
                {/* <li><Link to="education" smooth={true} duration={500} spy={true} offset={-100} className='hover:cursor-pointer link font-semibold hover:text-[var(--main-color)]'>Education</Link></li> */}
                <li><Link to="contact" smooth={true} duration={500} spy={true} offset={-50} className='hover:cursor-pointer link font-semibold hover:text-[var(--main-color)]'>Contact</Link></li>
            </ul>

            <div className="md:hidden mobile_navigation">
                <ul className='flex justify-around items-center gap-[10px] sm:gap-[20px] lg:gap-[50px] w-[100%]'>
                    <li>
                        <NavLink to="/" className={({ isActive }) => `flex justify-center items-center flex-col relative ${isActive ? 'active-link' : ''}`}>
                            <span className="icon text-white"><FontAwesomeIcon className='text-2xl md:text-3xl' icon={faHome} /></span>
                            <span className="text font-semibold">About</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills" className={({ isActive }) => `flex justify-center items-center flex-col relative ${isActive ? 'active-link' : ''}`}>
                            <span className="icon text-white"><FontAwesomeIcon className='text-2xl md:text-3xl' icon={faLightbulb} /></span>
                            <span className="text font-semibold">Skills</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="projects" className={({ isActive }) => `flex justify-center items-center flex-col relative ${isActive ? 'active-link' : ''}`}>
                            <span className="icon text-white"><FontAwesomeIcon className='text-2xl md:text-3xl' icon={faFolder} /></span>
                            <span className="text font-semibold">Projects</span>
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="education" className={({ isActive }) => `flex justify-center items-center flex-col relative ${isActive ? 'active-link' : ''}`}>
                            <span className="icon text-white"><FontAwesomeIcon className='text-2xl md:text-3xl' icon={faGraduationCap} /></span>
                            <span className="text font-semibold">Education</span>
                        </NavLink>
                    </li> */}
                    <li>
                        <NavLink to="contact" className={({ isActive }) => `flex justify-center items-center flex-col relative ${isActive ? 'active-link' : ''}`}>
                            <span className="icon text-white"><FontAwesomeIcon className='text-2xl md:text-3xl' icon={faEnvelope} /></span>
                            <span className="text font-semibold">Contact</span>
                        </NavLink>
                    </li>
                    <div className="indicator" style={{ left: `${indicatorPosition}px` }}></div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
