import React from 'react';
import ProjectsTemplate from '../templates/projectsTemplate';

export default function KittyVA(props) {
    return(
        <ProjectsTemplate title='KittyVA' onClose={() => props.onClose()}>
                    KittyVA is a virtual assistant written in Python created to offer tools to programmers that will make their lives simple. KittyVA is a hundred percent customizable using the python language. 
                    Features that KittyVA will offer are:
                    
                    <ul>
                        <li>An adorable pet-like creature that hangs on your desktop.</li>
                        <li>Can tell jokes.</li> 
                        <li>Capable of making small calculations.</li> 
                        <li>Can search for keywords on the web.</li>
                        <li>Capable of searching for files located in the computer.</li>
                        <li>Stores and executes custom scripts on command.</li>
                    </ul>   
                    <img src='https://media.milanote.com/p/images/1N7qqz15f1sbdw/0OQ/image.png' />  
                    <div>
                        KittyVA will be available in the future in Windows, Linux and Apple.
                        <p>GitHub Repository: <a href='https://github.com/jocoso/KittyVA' target='_blank'>Link</a></p>
                    </div>
        </ProjectsTemplate>
    );
} 
