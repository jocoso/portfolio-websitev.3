import React, {Component} from 'react';

import NavBar from '../components/hard/navbar';

import About from '../views/About';
import Experience from '../views/Experience';
import Projects from '../views/Projects';
import ContactMe from './ContactMe';

/*Contains all the components that remains regardless of the content */
class Frame extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div id="frame">
                <NavBar/>
                <About/>
                <Experience />
                <Projects />
                <ContactMe />
            </div>
        );
    }
}

export default Frame;