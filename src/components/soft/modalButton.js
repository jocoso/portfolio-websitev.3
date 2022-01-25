import React from 'react';

import ButtonPresenter from './buttonPresenter';

class ModalButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: null,
        }
    }

    render() {
        return(
            <div>
                { this.props.data.map((project, idx) => {
                    return <ButtonPresenter key={ idx } img={ project.thumbnail } name={ project.title } />
                }) }
            </div>
        );
    }
}

export default ModalButton;