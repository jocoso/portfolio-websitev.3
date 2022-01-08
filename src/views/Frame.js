import React, {Component} from 'react';
import '../App.css';

// importing components
import NavBar from '../components/soft/navBar';

// importing views
import AboutView from '../views/AboutView';
import ExperienceView from '../views/ExperienceView';
import ProjectsView from '../views/ProjectsView';
import BlogView from '../views/BlogView';
import ContactView from '../views/ContactView';



/*Contains all the components that remains regardless of the content */
class Frame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentContent: <AboutView />,
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
                    name: 'Blog',
                    component: <BlogView />,
                },
                {
                    id: 4,
                    name: 'Contact Me',
                    component: <ContactView />,
                },
            ]
        }
    }

    changeContent = (id) => {
        this.setState({currentContent: this.state.navItems[id].component});
    }

    render() {
        return (
            <div id='frame'>
                {/*Navigation Bar*/}
                <NavBar data={this.state.navItems} onClick={this.changeContent} />
                {/*Content*/}
                {this.state.currentContent}
                {/*Contact Info*/}
            </div>
        );
    }
}

export default Frame;