import React from 'react';
import ProjectsTemplate from '../templates/projectsTemplate';

export default function RAWR(props) {
    return(
        <ProjectsTemplate title='RAWR' onClose={() => props.onClose()}>
                    Rawr was created as an flexible and intuitive alternative to create text-adventure games.
                    Rawr was made with the sole purpose of allowing art and literature to work together to make text-adventure more intuitive and engaging.
                    
                    Features that RAWR will be able to offer are:
                    
                    <ul>
                        <li>Has hundreds of classes used to create objects in your game.</li>
                        <li>A GUI for the player to see their characters.</li>
                        <li>Offers highly customizable tools that will help with game design.</li>
                        <li>A Game Map.</li>
                        <li>A comfortable interface.</li>
                    </ul> 
                      
                    <img src='https://media.milanote.com/p/images/1N7qye15f1sbdD/hOg/image.png' />  
                    <img src='https://media.milanote.com/p/images/1N7qyA15f1sbdE/Ock/image.png' />  
                    <div>
                        Rawr can be executed in any computer running Java.
                        <p>GitHub Repository: <a href='https://github.com/jocoso/Rawr' target='_blank'>Link</a></p>
                    </div>
        </ProjectsTemplate>
    );
} 
