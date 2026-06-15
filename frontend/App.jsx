import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from "./src/components/Navbar.jsx";
import CreateListCard from "./src/components/Card.jsx";
import { Container } from "react-bootstrap";
ReactDOM.render(
    <div>
        <Navigation />
        <Container>
            <CreateListCard />
        </Container>
    </div>,
    document.getElementById("root")
);