import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderSection from "./assets/components/Pages/HeaderSection";
import HeroSection from "./assets/components/Pages/HeroSection";
import StarProjectsSection from "./assets/components/Pages/StarProjectsSection";

import React, { Component } from "react";

import "./reset.css";
import "./styles.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: "/",
        };
    }

    changeActivePage = async (page) => {
        this.setState({ activePage: page });
    };

    render() {
        return (
            <div className="App">
                {/* ================================================
        <h1>PAGES</h1>
        ================================================ */}
                <HeaderSection />
                <hr />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<HeroSection />} />
                        <Route path="/work" element={<StarProjectsSection />} />
                    </Routes>
                </main>

                {/* ================================================
        <h1>FUNCTIONS</h1>
        ================================================
        <Section />
        <Card />
        <FramedImage /> */}
            </div>
        );
    }
}

export default App;
