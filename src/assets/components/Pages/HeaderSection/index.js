import React from 'react';
import './style.css';

import FramedImage from '../../FramedImage';
import logo from '../../../images/logo.png';


class HeaderSection extends React.Component {
    render() {
        return (
            <div>
                {/* Logo */}
                <FramedImage src={logo} size={FramedImage.Sizes.SMALL} shape={FramedImage.Shapes.CIRCLE} alt="Logo" />
                {/* Navigation Links */}
            </div>
        );
    }
}

export default HeaderSection;