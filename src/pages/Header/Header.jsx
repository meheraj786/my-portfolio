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
          <button>Let's Talk <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffff" class="bi bi-arrow-up-right" 
          viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
</svg></button>
          
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header