import React, {Component} from 'react';
import ExperienceCards from '../components/soft/experienceCards';

class ExperienceView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayedCard: -1,
            showMenu: false,
            jobs: [
                'Valence College Prep',
                'Do Something',
                'Department of Education',
                'Tech Talent Pipeline',
                'Lehman College\' Math Lab'
            ],
            jobCards: [
                <ExperienceCards 
                    data={{
                        jobTitle: 'Learning Specialist',
                        jobPlace: 'Valence College Prep',
                        dateStr: 'August 2020',
                        dateEnd: 'Present',
                        resp: [
                            'Communicate and interact with parents on students academic progress.',
                            'Adhere to and comply with all the school rules and guidelines',
                            'Maintain the students’ performance logs to help the teacher elevate the kids’ confidence positively.',
                            'Responsible for creating class materials that students would use as enhancements to textbooks.'
                        ]
                    }}
                />,
                <ExperienceCards 
                    data={{
                        jobTitle: 'Software Engineer Intern',
                        jobPlace: 'Do Something',
                        dateStr: 'June 2019',
                        dateEnd: 'August 2019',
                        resp: [
                            'Helped implement component schemas using GraphQL and Contentful',
                            'Created a template focused on displaying company-related information using React and SASS',
                            'Wrote React code to facilitate communication between GraphQL and the main page, Phoenix-next',
                            'Test software development methodology in an agile environment'
                        ]
                    }}
                />,
                <ExperienceCards 
                
                    data={{
                        jobTitle: 'Technology Support Intern',
                        jobPlace: 'Department of Education',
                        dateStr: 'January 2018',
                        dateEnd: 'June 2018',
                        resp: [
                            'Organized and kept an inventory of all school equipment and maintained electronic devices',
                            'Assisted teachers regarding their laptops, computers, and printers',
                            'I contacted with DOE IT main desk consistently to troubleshoot the school’s issues'
                        ]
                    }}
                />,
                <ExperienceCards 
                
                    data={{
                        jobTitle: 'Teacher Assistant',
                        jobPlace: 'Tech Talent Pipeline',
                        dateStr: 'June 2018',
                        dateEnd: 'July 2018',
                        resp: [
                            'Aided a cohort of 32 college students to understand basic concepts of computer science, networking, and database systems',
                            'Assisted students by debugging and trouble solving student’s homework and their projects'
                        ]
                    }}
                />,

                <ExperienceCards 
                
                    data={{
                        jobTitle: 'College Assistant',
                        jobPlace: 'Computer Center Math Lab',
                        dateStr: 'November 2018',
                        dateEnd: 'May 2019',
                        resp: [
                            'Worked with a variety of students solving computer programming problems',
                            'Assigned students custom-made challenges they could do on their own',
                            'Provided specialized support for students with disabilities'
                        ]
                    }}
                />
            ]
        }
    }

    componentDidMount() {
        this.changeDisplayed(0);
    }

    changeDisplayed = (id) => {

        const {jobs} = this.state;
        
        if(this.state.displayedCard >= 0) {
            const currJob = jobs[this.state.displayedCard];       
            jobs[this.state.displayedCard] = currJob.substring(0, currJob.length-3);
        } 
        
        
        jobs[id] = jobs[id] + ' =>';


        this.setState({displayedCard: id, jobs }, () =>{
            this.dropDown();
        });
    }

    dropDown = () => {
        this.setState({showMenu: !this.state.showMenu})
    }
    

    render() {
        return(
            <div id='experience'>
                <div id='selector'>
                    <button onClick={this.dropDown}>{this.state.jobs[this.state.displayedCard]}</button>
                    <ul
                        className={
                            this.state.showMenu?'show':''
                        } 
                    >
                        {this.state.jobs.map((job, idx) => {
                            return <li 
                                key={idx} onClick={() => this.changeDisplayed(idx)}>{job}</li>
                        })}
                    </ul>
                    </div>
                    <div id='presentation'>
                        {this.state.jobCards[this.state.displayedCard]}
                    </div>
            </div>
        );
    }
}

export default ExperienceView;