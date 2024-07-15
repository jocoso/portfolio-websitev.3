import React from "react";
import "./style.css";

import FramedImage from "../../FramedImage";
import logo from "../../../images/logo-solid.png";

class HeaderSection extends React.Component {
    render() {
        return (
            <div>
                {/* Logo */}
                <FramedImage
                    src={logo}
                    size="ICON"
                    shape="CIRCLE"
                    alt="Logo"
                />
                {/* Navigation Links */}
                
            </div>
        );
    }
}

export default HeaderSection;
