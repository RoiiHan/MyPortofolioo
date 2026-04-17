import React from 'react'
import '../components/style/Container.css'
import Foto from '../assets/Fotoku13131.png'
import CV from '../assets/CV_RoihanTauhid.pdf'

function Container() {
  return (
    <div className="container">
        <div className="container-kiri">
            <ul>
                <li><a href="https://www.linkedin.com/in/roihantauhid/"><i className="fa-brands fa-linkedin"></i></a></li>
                <li><a href="https://www.instagram.com/roihan_thd/"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://github.com/RoiiHan"><i className="fa-brands fa-github"></i></a></li>
            </ul>
        </div>
        <div className="container-tengah">
            <div className="introduction">
                <div className="hello">
                    <h1>Hello I'm Roihan Tauhid</h1>
                    <p>Front End Developer</p>
                </div>
                <p>I’m a Front End Developer who enjoys building clean and simple web interfaces.I like turning ideas into experiences that feel natural and easy to use</p>
                <div className="btn-me">
                    <a href={CV} download="CV-RoihanTauhid.pdf">
                        <button className="btn-cv">Download CV</button>
                    </a>
                    <button className="btn-contact">Contact Me</button>
                </div>
            </div>
        </div>
        <div className="container-kanan">
            <img className="my-picture" alt="myPicture" src={Foto} />
        </div>
     </div>
  )
}

export default Container