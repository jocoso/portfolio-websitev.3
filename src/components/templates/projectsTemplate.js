import React, {Component} from 'react';

class ProjectsTemplate extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='projects-template'>
                <button onClick={() => this.props.onClose()} style={{padding: '5px', float: 'left', height: '1.7rem'}}>X</button>
                <div className='title-1'>
                    {this.props.title}
                </div>

                <div style={{backgroundColor:'transparent', textAlign: 'center'}}>
                   {this.props.children}
                </div>


            </div>
        );
    }
}

export default ProjectsTemplate;