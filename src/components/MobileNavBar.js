import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import seturlogo from './NavBarIcons/setur-logo.svg';
import personicon from './NavBarIcons/icon-person.svg';
import phoneIcon from './NavBarIcons/phoneIcon.svg';

function MobileNavBar() {
    return (
        <div className='MobileNavBar'>
           
            <Navbar bg="light" variant="ligth">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={seturlogo}
                            className="Setur-logo"
                        />{' '}
                        SeturMobileNavBar
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>


    );


}

export default MobileNavBar