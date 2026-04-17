import React from 'react'

function CardProjects({ title, description, tools, image }) {
  return (
    <div className="card">
        <img src={image} alt={title} />
        <div className="card-title">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <div className="tools">
            {tools.map((tool, index) => (
                <button key={index}>{tool}</button>
            ))}
        </div>
    </div>
  )
}

export default CardProjects