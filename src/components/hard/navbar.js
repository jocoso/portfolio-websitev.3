import React from 'react';

class NavBar extends React {
    constructor(props) {
        super(props);

        this.state = {
            links: [
                {
                    id: 'about',
                    link: '#about'
                }
            ]
        }
    }

    render() {
        return(
            <div>
                <ul>
                    {this.state.map((link, idx) => {
                        
                    })}
                </ul>
            </div>
        );
    }
}

export default NavBar;