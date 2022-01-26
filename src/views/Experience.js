import React from 'react';
import ScrollableMenu from '../components/soft/scrollableMenu';

class Experience extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            info:[

                {
                    title: 'DoSomething.org',
                    position: 'Software Engineer Intern',
                    dates: 'June 2019 - August 2019',
                    responsabilities: [
                        "Helped implement component schemas using GraphQL and Contentful",
                        "Created a template focused on displaying company-related information using React and SASS",
                        "Wrote React code to facilitate communication between GraphQL and the main page, Phoenix-next",
                        "Test software development methodology in an agile environment."
                    ]
                },

                {
                    title: 'Valence College Prep',
                    position: 'Learning Specialist Science Teacher',
                    dates: 'August 2020 - Present',
                    responsabilities: [
                        "Communicate and interact with parents on students’ academic progress.",
                        "Adhere to and comply with all the school rules and guidelines.",
                        "Maintain the students’ performance logs to help the teacher elevate the kids’ confidence positively.",
                        "Responsible for creating class materials that students would use as enhancements to textbooks."
                    ]
                },

                {
                    title: 'Computer Center Math Lab',
                    position: 'College Assistant',
                    dates: 'November 2018 - August 2018',
                    responsabilities: [
                        "Worked with a variety of students solving computer programming problems",
                        "Assigned students custom-made challenges they could do on their own",
                        "Provided specialized support for students with disabilities"
                    ]
                },
            ]
        }
    }

    render() {
        return(
            <div id="experience" className="page-size">
                <div className="vertical-middle">
                    <p className="title1">Experience</p> 
                    <ScrollableMenu data={ this.state.info } />
                </div>
            </div>
        );
    }
}

export default Experience;