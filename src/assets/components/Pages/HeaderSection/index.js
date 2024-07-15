import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

import FramedImage from "../../FramedImage";
import logo from "../../../images/logo-solid.png";

import "./style.css";

class HeaderSection extends React.Component {
    render() {
        return (
            <div id="header-section">
                {/* Logo */}
                <div id="logo">
                    <FramedImage
                        src={logo}
                        size="ICON"
                        shape="CIRCLE"
                        alt="Logo"
                    />
                </div>

                {/* Navigation Links */}
                <BrowserRouter>
                    <div className="nav-bar">
                        <ul style={{ listStyleType: "none" }}>
                            <li>
                                <Link path="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="nav-link">
                                    About Me
                                </Link>
                            </li>

                            <li>
                                <Link to="/star-project" className="nav-link">
                                    Star Projects
                                </Link>
                            </li>

                            <li>
                                <Link to="/blog" className="nav-link">
                                    Blog
                                </Link>
                            </li>

                            <li>
                                <Link to="/contact-me" className="nav-link">
                                    Contact Me
                                </Link>
                            </li>
                        </ul>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default HeaderSection;
