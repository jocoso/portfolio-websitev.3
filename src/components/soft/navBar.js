import React from 'react';

export default function NavBar(props) {
    return(
        
        <ul id='nav-bar'>
            <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetdrawings.com%2Fimages%2Fscary-spider-drawing-4.png&f=1&nofb=1' />
            [{props.data.map(item => {
                return <li onClick={() => props.onClick(item.id)}>
                            {item.id}. {item.name} 
                            {(item.id < props.data.length-1)?',':''}
                        </li>
            })}]
        </ul>
    );
}