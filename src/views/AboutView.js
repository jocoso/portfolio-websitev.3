import React, {Component} from 'react';

import profilePic from '../assets/images/portfolio-me.jpg';

class AboutView extends Component {
    render() {
        return(
            <div id='about-me'>
                <div id='profile-img'>
                    <img src={profilePic} className='profile-frame scratchy-border blink-img' />
                </div>
                <div className='title-2'>Joshua Collado</div>
                
                <p>I am a software engineer specializing in designing and creating programs that help people.</p>
            </div>
        );
    }
}

export default AboutView;