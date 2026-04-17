import React from 'react'
import './style/Tools.css'
import TailwindCssLogo from '../assets/tailwindCss-logo 1.png'

function Tools() {
  return (
    <div className="project-tools">
                <div className="project-header">
                    <h3>TOOLS & PROJECTS</h3>
                    <p>These are some of the tools and projects that I created in my life's journey in the world of programming</p>
                </div>
                <div className="project-fitur">
                    <button><span><i className="fa-brands fa-html5"></i> HTML</span></button>
                    <button><span><i className="fa-brands fa-css"></i> CSS</span></button>
                    <button><span><i className="fa-brands fa-js"></i> JavaScripts</span></button>
                    <button className="tailwind"><span><img src={TailwindCssLogo} alt="Tailwind CSS Logo"/> Tailwind</span></button>
                    <button><span><i className="fa-brands fa-react"></i> ReactJS</span></button>
                    <button><span><i className="fa-brands fa-python"></i> Python</span></button>
                    <button><span><i className="fa-brands fa-github"></i> Github</span></button>
                </div>
            </div>
  )
}

export default Tools