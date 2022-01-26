import React from 'react';

import FramedPicture from './framedPicture';
import classNames from 'classnames';


class ButtonScrollable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
        }
    }

    toggleInfo = () => {
        this.setState({ show: !this.state.show });
    }

    render() {
        const scrollClass = classNames({
                                'right': true,
                                'smooth-show': this.state.show,
                                'smooth-hide': !this.state.show
                            });
        const scrollStyle = {
            width: this.props.size + 'rem',
            marginBottom: this.props.separation + 'rem',
        }

        const buttonStyle = {
            marginBottom: this.props.separation + 'rem',
        }

        return(
            <div className="dual-container">
                <button className="button-style1 left" style={ buttonStyle } onClick={ this.toggleInfo }>
                    <FramedPicture img={ this.props.img } squared />
                    <p>{ this.props.name }</p>
                </button>
                <div className={ scrollClass } style={ scrollStyle }>
                    { this.props.title }
                    { this.props.content }
                </div>
            </div>
        );
    }
}

export default ButtonScrollable;