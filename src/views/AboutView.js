import React, {Component} from 'react';

import profilePic from '../assets/images/portfolio-me.jpg';
import { Parallax } from 'react-parallax';

class AboutView extends Component {
    render() {
        const mountainImage = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fillustrations%2Flandscape-with-mountain-range-graphic-sketch-illustration-id476949880&f=1&nofb=1';
        const inlineStyle = {
            background: '#000000',
            height: '10rem',
        }
        
        return(
            <div id='about-me'>
                <div id='profile-img'>
                    <Parallax bgImage={ mountainImage } strength={ 200 } style={inlineStyle} >
                        <img src={ profilePic } className='profile-frame scratchy-border blink-img' />
                    </Parallax>
                </div>
                <div className='title-2'>Joshua Collado</div>
                <p>I am a software engineer specializing in designing and creating programs that help people.</p>
            </div>
        );
    }
}

export default AboutView;