import React, {Component} from 'react';

class ProjectsView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [
                {
                    id: 0,
                    title: 'KittyVA',
                    status: 'Under Construction',
                    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.fineartamerica.com%2Fimages%2Fartworkimages%2Fmediumlarge%2F1%2Fblack-and-white-cat-ink-drawing-karen-kaspar.jpg&f=1&nofb=1'
                },
                {
                    id: 1,
                    title: 'Marvel Wiki',
                    status: 'Completed',
                    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Ffc%2F8f%2F0d%2Ffc8f0d5c01e257a48d19ec99ce186e6c.jpg&f=1&nofb=1'
                },
                {
                    id: 2,
                    title: 'RAWR',
                    status: 'Completed',
                    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fc3%2F1c%2F46%2Fc31c460c8a317cca1d15df18f360d069--dinosaur-drawing-baby-dinosaurs.jpg&f=1&nofb=1'
                }
            ]
        }
    }
    render() {
        return(
            <div id='projects'>
                <p className='title-2 text-centered'>Projects</p>
                <div id='projects-container'>
                    {this.state.projects.map((project, idx) => {
                        return <button key={idx} className='project-thumbnail'>
                            <p>[{project.status}]</p>
                            <img className='profile-frame' src={project.img} />
                            <p className='project-title'>{project.title}</p>
                            <em className='project-status'>{project.status}</em>
                        </button>
                    })}
                </div>
            </div>
        );
    }
}

export default ProjectsView;