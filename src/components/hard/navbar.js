import React from 'react';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            links: [
                {
                    id: 'abt',
                    name: 'About',
                    link: '#about-me'
                },
                {
                    id: 'exp',
                    name: 'Experience',
                    link: '#experience'
                },
                {
                    id: 'prj',
                    name: 'Projects',
                    link: '#projects'
                },
                {
                    id: 'cnt',
                    name: 'Contact Me',
                    link: '#contact-me'
                },
            ]
        }
    }

    render() {
        return(
            <div id="nav-bar">
                <ul className="inline-list">
                    {this.state.links.map((link, idx) => {
                        return <li 
                                className="rl-md5"  
                                key={link.id}>
                                    <a 
                                        className="blank-link"
                                        href={link.link}>
                                        {link.name}
                                    </a>
                                    
                                </li>
                    })}
                </ul>
            </div>
        );
    }
}

export default NavBar;