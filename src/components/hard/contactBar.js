import React, {Component} from 'react'

class ContactBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    id: 0,
                    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freeiconspng.com%2Fuploads%2Fgithub-logo-icon-26.png&f=1&nofb=1',
                    link: 'https://github.com/jocoso',
                },
                {
                    id: 1,
                    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F512%2F72%2F72077.png&f=1&nofb=1',
                    link: 'https://twitter.com/jocoso2218',
                },
                {
                    id: 2,
                    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fsocial-60%2F512%2Flinkedin__social__media_icons-512.png&f=1&nofb=1',
                    link: 'https://www.linkedin.com/in/jocoso5273/',
                }
            ]
        }
    }

    render() {
        return(
            <ul id='contact-bar' className='valign-bottom'>
                {this.state.items.map(item => {
                    return <li key={item.id}>
                        <a href={item.link} target='_blank'><img src={item.img} /></a>
                    </li>
                })}
            </ul>
        )
    }
}

export default ContactBar;