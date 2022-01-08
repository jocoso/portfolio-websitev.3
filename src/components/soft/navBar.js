import React from 'react';

export default function NavBar(props) {
    return(
        <ul id='nav-bar'>
            <img src='https://lh6.googleusercontent.com/proxy/p2zrk_ih7PQRA1d6OlAxz5jK92i_90IEd4ThJxy0ARmIu6vM-d1kNNg3TSeNB2EUUw49Yxhv5tvGNVISUHmvxL-ZBVH1wBDBgNpPBhUXNWdQVImJlRdcpwc=s0-d' />
            [{props.data.map(item => {
                return <li onClick={() => props.onClick(item.id)}>
                            {item.id}. {item.name} 
                            {(item.id < props.data.length-1)?',':''}
                        </li>
            })}]
        </ul>
    );
}