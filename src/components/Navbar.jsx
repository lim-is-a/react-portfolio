import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'


const MyNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="#home">IL</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#aboutMe">About</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default MyNavbar;
