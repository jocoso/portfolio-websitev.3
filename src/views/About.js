import React from 'react';
import {Parallax} from 'react-parallax';

import portfolio_img from '../assets/images/portfolio-me.jpg';

import FramedPicture from '../components/soft/framedPicture';

export default function About(props) {
    return(
        <div id="about-me">
            <Parallax
                bgImage={"https://x4s4g5f5.stackpathcdn.com/wp-content/uploads/2020/04/How-to-draw-mountains-1.jpg"}
                strength={-200}>
                <FramedPicture img={ portfolio_img } circled bordered />
            </Parallax>
            <p className="fs3">Joshua Collado</p>
            <p className="fs2">I am a computer science and a recent graduated</p>
        </div>
    );

}
