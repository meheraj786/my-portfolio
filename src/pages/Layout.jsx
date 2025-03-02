import React, {useEffect} from 'react'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'


function Layout() {
  useEffect(() => {
    const follower = document.createElement("div");
    follower.className = "mouse-follower";
    document.body.appendChild(follower);

    const outerCircle = document.createElement("div");
    outerCircle.className = "outer-circle";
    document.body.appendChild(outerCircle);

    const moveFollower = (e) => {
      follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      outerCircle.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    };

    window.addEventListener("mousemove", moveFollower);

    return () => {
      window.removeEventListener("mousemove", moveFollower);
      document.body.removeChild(follower);
      document.body.removeChild(outerCircle);
    };
  }, []);
  return (
    
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout