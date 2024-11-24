import React from 'react'
import linkdin from '../assets/linkedin.png'
import github from '../assets/github.png'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <nav className='flex justify-between items-center px-28 py-5'>
        <div className="logo text-3xl font-bold text-[#d82d25]">MD. DANISH</div>
        <ul className='flex gap-[50px]'>
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
                <NavLink to="/services" className={({ isActive }) => (isActive ? 'active-link' : '')}>Services</NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active-link' : '')}>Contact</NavLink>
            </li>
        </ul>
        <div className="social flex items-end gap-3 relative left-8">
            <a href="https://www.linkedin.com/in/md-danish-63312b309/">
                {/* <img className='w-8' src={linkdin} alt="Linkdin" /> */}
                <i className="fa-brands fa-linkedin fa-2xl "></i>
            </a>
            <a href="https://github.com/Danish0111">
                {/* <img className='w-8' src={github} alt="Github" /> */}
                <i className="fa-brands fa-github fa-2xl"></i>
            </a>
        </div>
      </nav>
    </>
  )
}

export default Navbar
