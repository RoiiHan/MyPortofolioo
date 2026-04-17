import React, { useState } from 'react'
import { Link } from 'react-router'
import './style/Navbar.css'

function Navbar() {
    const [isOpen,setIsOpen] = useState(false)
    const toogleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)

  return (  
    <nav>
        <div className="navbar-title"><h3>RoihanTauhid</h3></div>
        <button className='hamburger' onClick={toogleMenu}>
            <i className={isOpen ? 'fa-solid fa-x':'fa-solid fa-bars'}></i>
        </button>


        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
            <ul className="navbar-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/project">Project</Link></li>
                <li><Link to="/contactMe">Contact</Link></li>
            </ul>
        </div>
        <div>
            <ul className="navbar-item">
                <li><a href="https://www.linkedin.com/in/roihantauhid/"><i className="fa-brands fa-linkedin"></i></a></li>
                <li><a href="https://www.instagram.com/roihan_thd/"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://github.com/RoiiHan"><i className="fa-brands fa-github"></i></a></li>
            </ul>
        </div>
    </nav>
  ) 
}

export default Navbar