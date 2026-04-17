import React from 'react'
import './style/project.css'
import Tools from './Tools'
import DataProject from '../data/Project.json'
import CardProjects from './CardProjects'

function SectionProject() {
  return (
    <section className="container-project">
        <div className="project-contents">
            <Tools />
            <div className="project-link">
                <p className="project-link-header">Check out the projects I've created</p>
                <div className="project-grid">
                    {DataProject.map((project) => (
                        <CardProjects 
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            tools={project.tools}
                            image={project.image}
                        />
                    ))}
                </div>
            </div>
        </div>
     </section>
  )
}

export default SectionProject