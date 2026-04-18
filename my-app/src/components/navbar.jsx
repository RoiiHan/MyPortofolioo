import React, { useState } from 'react'
import { Link } from 'react-router'
import './style/Navbar.css'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)

    return (  
        <nav>
            <div className="navbar-title"><h3>RoihanTauhid</h3></div>

            <button className='hamburger' onClick={toggleMenu}>
                <i className={isOpen ? 'fa-solid fa-x' : 'fa-solid fa-bars'}></i>
            </button>

            <ul className="navbar-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/project">Project</Link></li>
                <li><Link to="/contactMe">Contact</Link></li>
            </ul>

            <ul className="navbar-item">
                <li><a href="https://www.linkedin.com/in/roihantauhid/"><i className="fa-brands fa-linkedin"></i></a></li>
                <li><a href="https://www.instagram.com/roihan_thd/"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://github.com/RoiiHan"><i className="fa-brands fa-github"></i></a></li>
            </ul>

            <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                    <li><Link to="/project" onClick={closeMenu}>Project</Link></li>
                    <li><Link to="/contactMe" onClick={closeMenu}>Contact</Link></li>
                </ul>
                <ul className="sosmed">
                    <li><a href="https://www.linkedin.com/in/roihantauhid/"><i className="fa-brands fa-linkedin"></i></a></li>
                    <li><a href="https://www.instagram.com/roihan_thd/"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="https://github.com/RoiiHan"><i className="fa-brands fa-github"></i></a></li>
                </ul>
            </div>
        </nav>
    ) 
}

export default Navbar