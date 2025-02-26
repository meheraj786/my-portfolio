import React from 'react'
import Logo from '../Logo.jsx'

function Footer() {
  return (
    <>
    <div className="footer pt-[79px]">
      <div className="container py-[114px]  bg-black rounded-[20px]">
        <div className="grid grid-cols-12">
          <div className="col-span-4 mx-auto">
            <Logo/>
          </div>
          <div className="col-span-4 mx-auto">
            <h6>Quick Links</h6>
            <ul>
              <li>Service</li>
              <li>Projects</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
            <div className="input">
            <input type="text" />
            <button>Sign Up</button>
            </div>
          </div>
          <div className="col-span-4 mx-auto">
            <h5>Address</h5>
            <ul>
              <li>Mohammadpur, Dhaka, Bangladesh</li>
              <li>meherajhosen786@gmail.com</li>
              <li>+880 1989162543</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default Footer