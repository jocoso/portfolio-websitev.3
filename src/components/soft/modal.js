import React from 'react';
import ButtonPresenter from './buttonPresenter';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        }
    }

    showModal = () => {
        this.setState({ showModal: true });
    }

    hideModal = () => {
        this.setState({ showModal: false });
    }

    render() {
        return(
            <div>
                <ButtonPresenter onClick={ this.showModal } img={ this.props.thumbnail } name={ this.props.name } />
                {(this.state.showModal)?
                    <div className="modal-bg">
                        <div className="modal-content">
                            <button onClick={this.hideModal} >X</button>
                            { this.props.children }
                        </div>
                    </div>
                :''}
            </div>
        );
    }
}

export default Modal;