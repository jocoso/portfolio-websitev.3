import React from 'react';
import ProjectsTemplate from '../templates/projectsTemplate';

export default function Marvel(props) {
    return(
        <ProjectsTemplate title='Marvel Wiki' onClose={() => props.onClose()}>
                    Marvel WIKI is a website I wrote for a mentorship program (OUT in Tech) using CSS, HTML, and javascript utilizing the Marvel API.
                    
                    Features that Marvel WIKI will be able to offer are:
                    
                    <ul>
                        <li>Able to look for any Marvel superhero.</li>
                        <li>Receive all series the character is in.</li>
                        <li>Check all the comics the Marvel character appears at.</li>
                    </ul>   
                    <img src='https://media.milanote.com/p/images/1N7rlR15f1sbdI/6bh/Screenshot+2022-01-11+191822.png' />
                    <div>
                        <p>Website Link: <a href='https://jocoso.github.io/MarvelWiki/' target='_blank'>Link</a></p>
                        <p>GitHub Repository: <a href='https://github.com/jocoso/Rawr' target='_blank'>Link</a></p>
                    </div>
        </ProjectsTemplate>
    );
} 
