import React from 'react'
import './style/SectionAbout.css'
import Foto from '../assets/Fotoku13131.png'


function SectionAbout() {
  return (
    <section className="container-contents">
        <div className="about">
            <div className="profile-about">
                <div className="profile-me">
                    <img src={Foto} alt="PotoProfie"/>
                </div>
                <div className="about-title">
                    <span className="profile-name">RoihanTauhid</span>
                    <span>Frontend Developer</span>
                </div>
            </div>
            <div className="about-me">
                <div className="about-me-title"> About Me</div>
                <div className="about-contents">
                    <p className="p1">I am an undergraduate student in Informatics Engineering who is actively preparing for a career in Front End Development by participating in bootcamps, short courses, and hands-on web development projects. I have experience working with :
                    </p>
                    <div>
                        <ul className="content-ul">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Tailwind CSS</li>
                            <li>JavaScript</li>
                            <li>Reactjs</li>
                        </ul>
                    </div>
                    <br />
                    <p>
                        and I am familiar with using Git for version control in collaborative development environments. In addition, I am proficient in <span>Microsoft Word</span>, <span>Excell</span>, and <span>PowerPoint</span> for documentation and presentations, and I have a foundational understanding of <span> Python</span>.I am highly motivated to learn, actively involved in organizational activities, and committed to continuously improving my technical and professional skills to pursue a career as a Front End Web Developer or Software Engineer.
                    </p>
                </div>
            </div>
        </div>
        <div className="about-picture">
            <img src={Foto} alt="AboutPoto"/>
        </div>
    </section>
  )
}

export default SectionAbout