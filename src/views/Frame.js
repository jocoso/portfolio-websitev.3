import React, {Component} from 'react';



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
                navbar  navbar     navbar     navbar
                contact profile    profile    profile 
                contact experience experience experience
                contact howler     howler     howler
            </div>
        );
    }
}

export default Frame;