import React, {Component} from 'react';
import '../App.css';

// importing components
import NavBar from '../components/soft/navBar';
import ContactBar from '../components/hard/contactBar';

// importing views
import AboutView from '../views/AboutView';
import ExperienceView from '../views/ExperienceView';
import ProjectsView from '../views/ProjectsView';
import ContactView from '../views/ContactView';



/*Contains all the components that remains regardless of the content */
class Frame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentContent: <AboutView />,
            mode: true,
            navItems: [
                {
                    id: 0,
                    name: 'About',
                    component: <AboutView />,
                },
                {
                    id: 1,
                    name: 'Experience',
                    component: <ExperienceView />,
                },
                {
                    id: 2,
                    name: 'Projects',
                    component: <ProjectsView />,
                },
                {
                    id: 3,
                    name: 'Contact Me',
                    component: <ContactView />,
                },
            ]
        }
    }

    changeContent = (id) => {
        this.setState({currentContent: this.state.navItems[id].component});
    }

    toggleMode = () => {
        this.setState({mode: !this.state.mode});
    }

    render() {
        const className = (this.state.mode?'light-mode':'dark-mode');
        const img = (this.state.mode? 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Framadan-doodles%2F32%2Fcrescent-moon-ramadan-muslim-islam-star-sky-512.png&f=1&nofb=1' : 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages_k%2Ftransparent-sun-tumblr%2Ftransparent-sun-tumblr-3.png&f=1&nofb=1');
        return (
            <div id='frame' className={className}>
                {/* Toggle Mode */}
                <button onClick={this.toggleMode} className='blink-img' style={{float: 'left', position: 'fixed', top: '1rem', left: '2rem', border: 'none'}}>
                    
                    <img src={img}
                        width='30'
                        height='30' />
                </button>
                {/*Navigation Bar*/}
                <NavBar data={this.state.navItems} onClick={this.changeContent} />
                {/*Content*/}
                <div id="content">
                    <AboutView />
                    <ExperienceView className={className} />
                    <ProjectsView className={className} />
                    <ContactView className={className} />
                </div>
                {/*Contact Info*/}
                <ContactBar />
            </div>
        );
    }
}

export default Frame;