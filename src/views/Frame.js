import React, {Component} from 'react';
import '../App.css';

import NavBar from '../components/soft/navBar';


/*Contains all the components that remains regardless of the content */
class Frame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navItems: [
                {
                    id: 0,
                    name: 'About'
                },
                {
                    id: 1,
                    name: 'Experience'
                },
                {
                    id: 2,
                    name: 'Projects'
                },
                {
                    id: 3,
                    name: 'Blog'
                },
                {
                    id: 4,
                    name: 'Contact Me'
                },
            ]
        }
    }

    render() {
        return (
            <div>
                {/*Navigation Bar*/}
                <NavBar data={this.state.navItems} />
                {/*Content*/}
                {/*Contact Info*/}
            </div>
        );
    }
}

export default Frame;