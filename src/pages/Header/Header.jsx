import React from 'react'

function Header() {
  return (
  <>
    <div id="navbar bg-[#1C1C1C]">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand" href="/">Meheraj</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#banner">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#service">Service</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#skill">Skill</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#projects">Projects</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#blog">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Header