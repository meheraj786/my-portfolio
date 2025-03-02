import React, {useRef, useEffect} from "react";
import Logo from "../Logo.jsx";
import {NavLink} from "react-router-dom";
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

function Footer() {
  gsap.registerPlugin(ScrollTrigger);
  const footerRef = useRef(null); 
  const footerMainRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(footerRef.current, 

      { opacity: 0, y: "100%" },
      { 
        opacity: 1, 
        y: 0, 
        // duration: 3, 
        scrollTrigger: {
          trigger: footerMainRef.current,
          start: "top 80%",
          end: "top 80%",
          scrub: 2,
        }
      }
    )
  }, []);
  return (
    <>
      <div ref={footerMainRef}  className=" overflow-hidden footer pt-[79px]">
        <div ref={footerRef} className="container py-[114px]  bg-black rounded-[20px]">
          <div className="grid grid-cols-12">
            <div className="lg:col-span-4 col-span-12 mx-auto">
              <Logo />
            </div>
            <div className="lg:col-span-4 mt-5 lg:mt-0 col-span-12 mx-auto">
              <h5>Quick Links</h5>
              <ul className="flex opacity-[70%] cursor-pointer justify-between mt-[38px] mb-[65px]">
              <li className=''>
                <NavLink className={({ isActive }) => `${isActive ? " text-[#C9F31D]" : "text-white "}`} to="service">Service</NavLink>
              </li>
              <li className=''>
                <NavLink className={({ isActive }) => `${isActive ? " text-[#C9F31D]" : "text-white "}`} to="projects">Projects</NavLink>
              </li>
              <li className=''>
                <NavLink className={({ isActive }) => `${isActive ? " text-[#C9F31D]" : "text-white "}`} to="blog">Blog</NavLink>
              </li>
              <li className=''>
                <NavLink className={({ isActive }) => `${isActive ? " text-[#C9F31D]" : "text-white "}`} to="contact">Contact</NavLink>
              </li>
              </ul>
              <div className="input">
                <div className="mailIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g fill="currentColor">
                      <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                      <path
                        fill="currentColor"
                        d="M19 14a1 1 0 0 1 .898.56l.048.117l.13.378a3 3 0 0 0 1.684 1.8l.185.07l.378.129a1 1 0 0 1 .118 1.844l-.118.048l-.378.13a3 3 0 0 0-1.8 1.684l-.07.185l-.129.378a1 1 0 0 1-1.844.118l-.048-.118l-.13-.378a3 3 0 0 0-1.684-1.8l-.185-.07l-.378-.129a1 1 0 0 1-.118-1.844l.118-.048l.378-.13a3 3 0 0 0 1.8-1.684l.07-.185l.129-.378A1 1 0 0 1 19 14m3-7.032v7.522l-.032-.081l-.129-.379a3 3 0 0 0-5.61-.179l-.068.18l-.13.378a1 1 0 0 1-.516.58l-.106.043l-.379.129a3 3 0 0 0-1.404 4.673l.138.166H4a2 2 0 0 1-1.995-1.85L2 18V6.968l9.04 7.534a1.5 1.5 0 0 0 1.797.092l.123-.092zM20 4c.564 0 1.073.233 1.436.608l.116.13L12 12.698l-9.552-7.96a2 2 0 0 1 1.366-.73L4 4z"
                      />
                    </g>
                  </svg>
                </div>
                <input type="text" />
                <button>Sign Up</button>
              </div>
            </div>
            <div className="lg:col-span-4 mt-5 lg:mt-0 col-span-12 mx-auto">
              <h5 className="mb-[38px]">Address</h5>
              <ul>
                <li className="flex">
                  <span className="mr-[10px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#C9F31D"
                        d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
                      />
                    </svg>
                  </span>
                  Mohammadpur, Dhaka, Bangladesh
                </li>
                <li className="my-[15px] flex ">
                  <span className="mr-[10px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g fill="currentColor">
                        <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                        <path
                          fill="currentColor"
                          d="M19 14a1 1 0 0 1 .898.56l.048.117l.13.378a3 3 0 0 0 1.684 1.8l.185.07l.378.129a1 1 0 0 1 .118 1.844l-.118.048l-.378.13a3 3 0 0 0-1.8 1.684l-.07.185l-.129.378a1 1 0 0 1-1.844.118l-.048-.118l-.13-.378a3 3 0 0 0-1.684-1.8l-.185-.07l-.378-.129a1 1 0 0 1-.118-1.844l.118-.048l.378-.13a3 3 0 0 0 1.8-1.684l.07-.185l.129-.378A1 1 0 0 1 19 14m3-7.032v7.522l-.032-.081l-.129-.379a3 3 0 0 0-5.61-.179l-.068.18l-.13.378a1 1 0 0 1-.516.58l-.106.043l-.379.129a3 3 0 0 0-1.404 4.673l.138.166H4a2 2 0 0 1-1.995-1.85L2 18V6.968l9.04 7.534a1.5 1.5 0 0 0 1.797.092l.123-.092zM20 4c.564 0 1.073.233 1.436.608l.116.13L12 12.698l-9.552-7.96a2 2 0 0 1 1.366-.73L4 4z"
                        />
                      </g>
                    </svg>{" "}
                  </span>
                  meherajhosen786@gmail.com
                </li>
                <li className="flex">
                  <span className="mr-[10px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
                      />
                    </svg>
                  </span>
                  +880 1989162543
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container flex flex-col items-center lg:flex-row lg:justify-between justify-center copyright py-[40px]">
          <p className="opacity-[70%]">
            Copyright @2025, Meheraj All Rights Reserved
          </p>
          <div className="icons lg:w-[10%] w-[30%] mt-5 lg:mt-0 flex items-center justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
