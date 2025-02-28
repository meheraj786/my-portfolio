import React, { useState } from 'react';
import Logo from '../Logo';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // Ensure this import

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className='bg-[#1C1C1C] left-0 text-white py-[24px]'>
        <div className='container flex justify-between items-center text-white pr-5 lg:pr-0 px-2 lg:px-0'>
          <Logo />
          <div className="navlist hidden lg:block mx-auto">
            <ul className='flex items-center'>
              <li className='mx-[17px]'>
                <NavLink className={({ isActive }) => `${isActive ? " text-[#C9F31D]" : "text-white "}`} to="/">Home</NavLink>
              </li>
              <li className='mx-[17px]'>
                <NavLink className={({ isActive }) => `${isActive ? " text-[#C9F31D]" : "text-white "}`} to="about">About</NavLink>
              </li>
              <li className='mx-[17px]'>
                <NavLink className={({ isActive }) => `${isActive ? " text-[#C9F31D]" : "text-white "}`} to="service">Services</NavLink>
              </li>
              <li className='mx-[17px]'>
                <NavLink className={({ isActive }) => `${isActive ? " text-[#C9F31D]" : "text-white "}`} to="skill">Skill</NavLink>
              </li>
              <li className='mx-[17px]'>
                <NavLink className={({ isActive }) => `${isActive ? " text-[#C9F31D]" : "text-white "}`} to="projects">Projects</NavLink>
              </li>
              <li className='mx-[17px]'>
                <NavLink className={({ isActive }) => `${isActive ? " text-[#C9F31D]" : "text-white "}`} to="contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="right hidden lg:block">
            <button id='button' className='flex items-center'>Let's Talk
              <span className="p-[8px] ml-[8px] rounded-full bg-[#C9F31D]">
                <svg className="rotate-45" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 15 15">
                  <path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414" />
                </svg>
              </span>
            </button>
          </div>
          <button className="lg:hidden" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faBars} size="xl" /> {/* Ensure this icon */}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#1C1C1C] text-white px-2 py-4">
            <ul className='flex flex-col items-center'>
              <li className='my-[10px]'>
                <NavLink className={({ isActive }) => `${isActive ? " text-[#C9F31D]" : "text-white "}`} to="/" onClick={toggleMobileMenu}>Home</NavLink>
              </li>
              <li className='my-[10px]'>
                <NavLink className={({ isActive }) => `${isActive ? " text-[#C9F31D]" : "text-white "}`} to="about" onClick={toggleMobileMenu}>About</NavLink>
              </li>
              <li className='my-[10px]'>
                <NavLink className={({ isActive }) => `${isActive ? " text-[#C9F31D]" : "text-white "}`} to="service" onClick={toggleMobileMenu}>Services</NavLink>
              </li>
              <li className='my-[10px]'>
                <NavLink className={({ isActive }) => `${isActive ? " text-[#C9F31D]" : "text-white "}`} to="skill" onClick={toggleMobileMenu}>Skill</NavLink>
              </li>
              <li className='my-[10px]'>
                <NavLink className={({ isActive }) => `${isActive ? " text-[#C9F31D]" : "text-white "}`} to="projects" onClick={toggleMobileMenu}>Projects</NavLink>
              </li>
              <li className='my-[10px]'>
                <NavLink className={({ isActive }) => `${isActive ? " text-[#C9F31D]" : "text-white "}`} to="contact" onClick={toggleMobileMenu}>Contact</NavLink>
              </li>
              <li className='my-[10px]'>
                <button id='button' className='flex items-center'>Let's Talk
                  <span className="p-[8px] ml-[8px] rounded-full bg-[#C9F31D]">
                    <svg className="rotate-45" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 15 15">
                      <path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414" />
                    </svg>
                  </span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;