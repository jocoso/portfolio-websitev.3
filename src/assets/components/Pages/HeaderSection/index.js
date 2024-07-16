import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import { IoClose, IoMenu } from "react-icons/io5";

import FramedImage from "../../FramedImage";
import swi from "../../../images/switch.png";
import scratchPng from "../../../images/scratch.png";
import scratchSnd from "../../../sounds/scribble.mp3";
import homePng from "../../../images/home.png";
import workPng from "../../../images/work.png";
import mediaPng from "../../../images/media.png";
import archivePng from "../../../images/archive.png";
import "./styles.css";

const HeaderSection = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(0);
    const [linkAudio] = useState(new Audio(scratchSnd));

    useEffect(() => {
        const savedOption = Number.parseInt(localStorage.getItem("SelectedOption") || 0);
        setActiveLink(savedOption);
    }, []);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleNavLinkClick = (index) => {
        localStorage.setItem("SelectedOption", index);
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
                            className={`nav-link ${activeLink === 0 ? "active" : ""}`}
                            onClick={() => handleNavLinkClick(0)}
                        >
                            {/* <img src={homePng} alt="" width={100} /> */}
                            Home
                        </NavLink>
                        {activeLink === 0 && (
                            <img
                                src={scratchPng}
                                alt=""
                                className="overlay-image"
                                width={60}
                                height={40}
                            />
                        )}
                    </li>

                    <li className="nav-item">
                        <NavLink
                            to="/work"
                            className={`nav-link ${activeLink === 1 ? "active" : ""}`}
                            onClick={() => handleNavLinkClick(1)}
                        >
                            {/* <img src={workPng} alt="" width={100} /> */}
                            Work
                        </NavLink>
                        {activeLink === 1 && (
                            <img
                                src={scratchPng}
                                alt=""
                                className="overlay-image"
                                width={60}
                                height={40}
                            />
                        )}
                    </li>

                    <li className="nav-item">
                        <NavLink
                            to="/media"
                            className={`nav-link ${activeLink === 2 ? "active" : ""}`}
                            onClick={() => handleNavLinkClick(2)}
                        >
                            {/* <img src={mediaPng} alt="" width={100} /> */}
                            Media
                        </NavLink>
                        {activeLink === 2 && (
                            <img
                                src={scratchPng}
                                alt=""
                                className="overlay-image"
                                width={60}
                                height={40}
                            />
                        )}
                    </li>

                    <li className="nav-item">
                        <NavLink
                            to="/archive"
                            className={`nav-link ${activeLink === 3 ? "active" : ""}`}
                            onClick={() => handleNavLinkClick(3)}
                        >
                            {/* <img src={archivePng} alt="" width={100} /> */}
                            Archive
                        </NavLink>
                        {activeLink === 3 && (
                            <img
                                src={scratchPng}
                                alt=""
                                className="overlay-image"
                                width={70}
                                height={40}
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
