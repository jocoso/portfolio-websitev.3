import React from 'react';

import ModalButton from '../components/soft/modalButton';

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
                }
            ]
        }
    }

    render() {
        return(
            <div div="projects">
                <ModalButton data={ this.state.projects } />
            </div>
        );
    }
}

export default Projects;