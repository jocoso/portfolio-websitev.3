import React from 'react';

import ButtonScrollable from '../components/soft/buttonScrollable';

class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [
                {
                    title: 'Rawr',
                    languages: ['C++ ', 'C ', 'Shell ', 'Makefile'],
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
                    languages: ['JavaScript ', 'CSS ', 'HTML '],
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
            <div id="projects" className="page-size">
                <div className="vertical-middle">
                    <p className="title1">Projects</p>
                    {this.state.projects.map((project, idx) => {
                        return <ButtonScrollable key={ idx } 
                                    img={ project.thumbnail } 
                                    name={ project.title } 
                                    title={ project.title }
                                    content={ <div><div>{project.languages}</div><div>{project.description}</div></div> }
                                />
                    })}
                </div>
            </div>
        );
    }
}

export default Projects;