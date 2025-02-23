import React from 'react'
import Logo from '../Logo'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <nav className='bg-[#1C1C1C] text-white pt-[24px] pb-[24px]'>
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
          
        </div>
      </div>
    </nav>
  )
}

export default Header