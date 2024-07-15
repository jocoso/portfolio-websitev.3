import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import ErrorBoundary from "../../src/errorBoundary.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <React.StrictMode>
            <ErrorBoundary>
                <Router>
                    <App />
                </Router>
            </ErrorBoundary>
        </React.StrictMode>
    </React.StrictMode>
);
