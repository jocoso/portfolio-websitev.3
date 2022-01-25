import React from 'react';

export default function NavBar(props) {
    return(
        
        <ul id='nav-bar'>
            
            [{props.data.map(item => {
                return <a href={item.link} ><li onClick={() => props.onClick(item.id)}>
                            {item.id}. {item.name} 
                            {(item.id < props.data.length-1)?',':''}
                        </li></a>
            })}]
        </ul>
    );
}