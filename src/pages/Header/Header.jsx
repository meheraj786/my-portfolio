import React from 'react'
import Logo from '../Logo'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Header() {
  return (
    <>
    <nav className='bg-[#1C1C1C] text-white py-[24px] '>
      <div className='container flex justify-between items-center'>
        <Logo/>
        <div className="navlist mx-auto">
          <ul className='flex items-center'>
            <li className='mx-[17px]'><NavLink to="/">Home</NavLink></li>
            <li className='mx-[17px]'><NavLink to="about">About</NavLink></li>
            <li className='mx-[17px]'><NavLink to="#service">Services</NavLink></li>
            <li className='mx-[17px]'><NavLink to="skill">Skill</NavLink></li>
            <li className='mx-[17px]'><NavLink to="projects">Projects</NavLink></li>
            <li className='mx-[17px]'><NavLink to="contact">Contact</NavLink></li>
          </ul>
        </div>
        <div className="right">
          <button id='button' className='flex items-center'>Let's Talk                 <span className="p-[8px] ml-[8px] rounded-full bg-[#C9F31D]">
                <svg className="rotate-45" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 15 15"><path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"/></svg>

                </span> </button>
          
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header