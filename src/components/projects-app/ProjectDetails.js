import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;

    return (
        <div className="container section project-details">
            <div className="card z-dept-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio minima alias dolores, incidunt odio voluptates eveniet qui, eum maiores delectus consequuntur blanditiis, quae impedit voluptatum beatae. Dolorem quia et impedit.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by USER</div>
                    <div>2 sept, 2am</div>
                </div>
            </div>
            
        </div>
    )
}

export default ProjectDetails
