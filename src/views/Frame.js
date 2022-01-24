import React, {Component} from 'react';

import NavBar from '../components/hard/navbar';
import About from '../views/About';

/*Contains all the components that remains regardless of the content */
class Frame extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <NavBar/>
                <About/>
            </div>
        );
    }
}

export default Frame;