import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div>
        <div className="card z-dept-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                        <p>Posted by NN</p>
                        <p className="grey-text">09 Sept, 2am</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary