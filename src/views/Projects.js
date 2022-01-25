import React from 'react';

import Modal from '../components/soft/modal';

class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [
                {
                    title: 'Rawr',
                    languages: ['C++', 'C', 'Shell', 'Makefile'],
                    thumbnail: 'https://ih1.redbubble.net/image.610105068.0977/st,small,845x845-pad,1000x1000,f8f8f8.u5.jpg',
                    images: [],
                    description: '\
                    Rawr was created as an flexible and intuitive alternative to create text-adventure games.\
                    Rawr was made with the sole purpose of allowing art and literature to work together to make text-adventure more intuitive and engaging.',
                    links: {
                        github: 'https://github.com/jocoso/RawrV2'
                    }
                },
                {
                    title: 'Marvel Wiki',
                    languages: ['JavaScript', 'CSS', 'HTML'],
                    thumbnail: 'https://c.wallhere.com/photos/a8/8b/logo_Captain_America_Marvel_Comics_Hydra_comics_minimalism_skull_simple_background-256657.jpg!d',
                    images: [],
                    description: 'A small wiki about marvel.',
                    links: {
                        github: 'https://github.com/jocoso/MarvelWiki',
                        website: 'https://jocoso.github.io/MarvelWiki/'
                    }
                },
            ]
        }
    }

    render() {
        return(
            <div div="projects">
                {this.state.projects.map((project, idx) => {
                    return <Modal key={ idx } thumbnail={ project.thumbnail } name={ project.title } > 
                            <p className="title1">Title</p>

                            <ul className="undecorated-list inline-list">
                                {project.languages.map((language, idx) => {
                                        return <li key={ idx } className="rl-md5"> 
                                            { language }
                                        </li>
                                    })
                                }
                            </ul>

                            <p>
                                {project.description}
                            </p>

                            <a href={project.links.github}>
                              --> github   
                            </a>

                            {
                                project.links.website?<a href={ project.links.website }>--> website</a>:''
                            }

                        </Modal>
                })}
            </div>
        );
    }
}

export default Projects;