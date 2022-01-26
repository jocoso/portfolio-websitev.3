import React from 'react';

class ContactMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <div id="contact-me" className="page-size">
                <div className="vertical-middle">
                    <p className="title1">Contact Me</p>
                    <a href="mailto: joshua.collado022@gmail.com">Hit me up.</a>
                </div>
            </div>
        );
    }
}

export default ContactMe;