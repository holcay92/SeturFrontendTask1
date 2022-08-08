import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import seturlogo from './NavBarIcons/setur-logo.svg';
import personicon from './NavBarIcons/icon-person.svg';
import phoneIcon from './NavBarIcons/phoneIcon.svg';

import { Nav, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const MobileNavBar = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <NavLink >Otel</NavLink>
                    <NavLink  >Tur</NavLink>
                    <NavLink >Gemi</NavLink>
                    <NavLink >Uçak</NavLink>
                    <NavLink  >Özel Çözümler</NavLink>
                    <NavLink  >Kampanyalar</NavLink>
                </Nav>
            </Navbar.Collapse>     
        </Navbar>
    );
}
 
export default MobileNavBar;