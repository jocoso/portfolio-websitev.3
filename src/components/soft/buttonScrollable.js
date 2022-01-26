import React from 'react';

import FramedPicture from './framedPicture';
import classNames from 'classnames';


class ButtonScrollable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: true,
        }
    }

    toggleInfo = () => {
        this.setState({ show: !this.state.show });
    }

    render() {
        const scrollStyle = classNames({
                                'right': true,
                                'smooth-show': this.state.show,
                                'smooth-hide': !this.state.show
                            });

        return(
            <div className="dual-container">
                <button className="button-style1 left" onClick={ this.toggleInfo }>
                    <FramedPicture img={ this.props.img } squared />
                    <p>{ this.props.name }</p>
                </button>
                <div className={ scrollStyle }>
                    { this.props.title }
                    { this.props.content }
                </div>
            </div>
        );
    }
}

export default ButtonScrollable;