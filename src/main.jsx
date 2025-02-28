import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Skill from './pages/Skill.jsx'
import Blog from './pages/Blog.jsx'
import ReadBlog from './pages/ReadBlog.jsx'
import Service from './pages/Service.jsx'
import Contact from './pages/Contact.jsx'


const router= createBrowserRouter([{
  path: '/',
  element: <Layout/>,
  children: [{
    path: '',
      element: <Home/>
  },{
    path: 'about',
    element: <About/>
  },{
    path: 'projects',
    element: <Projects/>
  },{
    path: 'skill',
    element: <Skill/>
  },{
    path: 'blog',
    element: <Blog/>
  },{
    path: 'readblog',
    element: <ReadBlog/>
  },
  {
    path: 'service',
    element: <Service/>
  },
  {
    path: 'contact',
    element: <Contact/>
  }
  
]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
