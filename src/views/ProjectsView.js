import React, {Component} from 'react';

// Projects Components
import KittyVA from '../components/hard/kittyvaProject';
import RAWR from '../components/hard/rawrProject';
import Marvel from '../components/hard/marvelProject';

class ProjectsView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false,
            displayedContent: null,
            projects: [
                {
                    id: 0,
                    title: 'KittyVA',
                    status: 'Under Construction',
                    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.fineartamerica.com%2Fimages%2Fartworkimages%2Fmediumlarge%2F1%2Fblack-and-white-cat-ink-drawing-karen-kaspar.jpg&f=1&nofb=1',
                    content: null
                },
                {
                    id: 1,
                    title: 'Marvel Wiki',
                    status: 'Completed',
                    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Ffc%2F8f%2F0d%2Ffc8f0d5c01e257a48d19ec99ce186e6c.jpg&f=1&nofb=1',
                    content: null
                },
                {
                    id: 2,
                    title: 'RAWR',
                    status: 'Completed',
                    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fc3%2F1c%2F46%2Fc31c460c8a317cca1d15df18f360d069--dinosaur-drawing-baby-dinosaurs.jpg&f=1&nofb=1',
                    content: null
                }
            ]
        }
    }

    componentDidMount() {
        const {projects} = this.state;

        projects[0].content = KittyVA;
        projects[1].content = Marvel;
        projects[2].content = RAWR;

        this.setState({projects});
    }

    showProject = (id) => {
        this.setState({displayedContent: this.state.projects[id].content, isVisible: true});
    }

    closeProject = () => {
        this.setState({isVisible: false});
    }

    render() {
        return(
            <div id='projects' className={this.props.className}>
                <p className='title-2 text-centered'>Projects</p>
                <div id='projects-container'>
                    {this.state.projects.map((project, idx) => {
                        return <button key={idx} onClick={() => this.showProject(project.id)} className='project-thumbnail centered-container'>
                            <img className='profile-frame left-container' src={project.img} />
                            <div className='profile-info right-container' >
                                <p>[{project.status}]</p>
                                <p>{project.title}</p>
                            </div>
                        </button>
                    })}
                </div>
                {this.state.isVisible ? <this.state.displayedContent onClose={this.closeProject} /> : ''}
            </div>
        );
    }
}

export default ProjectsView;