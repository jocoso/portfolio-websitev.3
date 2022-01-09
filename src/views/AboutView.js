import React, {Component} from 'react';

import profilePic from '../assets/images/portfolio-me.jpg';

class AboutView extends Component {
    render() {
        return(
            <div id='about-me' className='valign-middle'>
                <div id='profile-img'>
                    <img src={profilePic} className='profile-frame scratchy-border' />
                </div>
                <div className='title'>Joshua Collado</div>
                
                <p>I am a software engineer specializing in designing and creating programs that help people.</p>
            </div>
        );
    }
}

export default AboutView;