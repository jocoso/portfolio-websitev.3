import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";

import FramedImage from "../../FramedImage";
import swi from "../../../images/switch.png";
import scratchPng from "../../../images/scratch.png";
import scratchSnd from "../../../sounds/scribble.mp3";
import "./styles.css";

const HeaderSection = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(0);
    const [linkAudio, setLinkAudio] = useState(new Audio(scratchSnd));

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleNavLinkClick = (index) => {
        linkAudio.play();
        setActiveLink(index);
    };

    return (
        <header id="header-section">
            <nav>
                <ul className={`nav-bar ${menuOpen ? "open" : ""}`}>
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            className="nav-link"
                            activeClassName="active"
                            onClick={() => {
                                handleNavLinkClick(0);
                            }} // change to is active which will set the others to false
                        >
                            Home
                        </NavLink>
                        {/* If it is active */}
                        {activeLink === 0 && (
                            <img
                                src={scratchPng}
                                alt=""
                                className="overlay-image"
                            />
                        )}
                    </li>

                    <li className="nav-item">
                        <NavLink
                            to="/work"
                            exact
                            className="nav-link"
                            activeClassName=""
                            onClick={() => {
                                handleNavLinkClick(1);
                            }}
                        >
                            Work
                        </NavLink>
                        {/* If it is active */}
                        {activeLink === 1 && (
                            <img
                                src={scratchPng}
                                alt=""
                                className="overlay-image"
                            />
                        )}
                    </li>

                    <li className="nav-item">
                        <NavLink
                            to="/media"
                            exact
                            className="nav-link"
                            activeClassName=""
                            onClick={() => {
                                handleNavLinkClick(2);
                            }}
                        >
                            Media
                        </NavLink>
                        {/* If it is active */}
                        {activeLink === 2 && (
                            <img
                                src={scratchPng}
                                alt=""
                                className="overlay-image"
                            />
                        )}
                    </li>

                    <li className="nav-item">
                        <NavLink
                            to="/archive"
                            exact
                            className="nav-link"
                            activeClassName=""
                            onClick={() => {
                                handleNavLinkClick(3);
                            }}
                        >
                            Archive
                        </NavLink>
                        {/* If it is active */}
                        {activeLink === 3 && (
                            <img
                                src={scratchPng}
                                alt=""
                                className="overlay-image"
                            />
                        )}
                    </li>
                    {/* Add more nav items here */}
                </ul>
                {/* <div id="nav-close" onClick={handleMenuToggle}>
                    <IoClose />
                </div>

                <div id="nav-toggle" onClick={handleMenuToggle}>
                    <IoMenu />
                </div> */}
            </nav>
            <FramedImage src={swi} size="ICON" alt="A sad demon doodle" />
        </header>
    );
};

export default HeaderSection;
