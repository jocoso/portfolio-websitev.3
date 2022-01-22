import React from 'react';

export default function NavBar(props) {
    return(
        
        <ul id='nav-bar'>
            [{props.data.map(item => {
                return <li onClick={() => props.onClick(item.id)}>
                            <a href={item.link}>
                                {item.id}. {item.name} 
                                {(item.id < props.data.length-1)?',':''}
                            </a>
                        </li>
            })}]
        </ul>
    );
}