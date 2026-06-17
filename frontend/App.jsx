import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from "./src/components/Navbar.jsx";
import CreateListCard from "./src/components/Card.jsx";
import { Container } from "react-bootstrap";
import "./App.css";

ReactDOM.render(
    <div className="app-container">
        {/* Space Background Elements */}
        <div className="space-stars"></div>
        
        {/* Purple Figurines */}
        <div className="alien alien-1">👾</div>
        <div className="alien alien-2">👾</div>
        <div className="alien alien-3">👾</div>

        <Navigation />
        <Container>
            <CreateListCard />
        </Container>
    </div>,
    document.getElementById("root")
);