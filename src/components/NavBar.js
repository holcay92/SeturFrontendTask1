import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import seturlogo from './NavBarIcons/setur-logo.svg';
import personicon from './NavBarIcons/icon-person.svg';

function NavBar() {
  return (
    <div>
     {/* <img
          src={topBlackRectangle}
          className="topBlackRectangle"
          alt="some value" />

        <img
          src={topBlackShape}
          className="topBlackShape"
          alt="some value" />*/}
      <div className='Rectangle'>
        
      </div>
      <Navbar className="col-md-12" bg="light"  >
        
        <Navbar.Brand className='Setur-logo' href="https://www.setur.com.tr">
          
          <img
            src={seturlogo}
            className="Setur-logo"
            alt="some value"
          />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">


          <Nav >

            <NavDropdown data-toggle="dropdown" className='Otel' title="Otel">Otel</NavDropdown>
            <NavDropdown className='Tur' title="Tur">Tur</NavDropdown>
            <NavDropdown className='Gemi' title="Gemi">Gemi</NavDropdown>
            <NavDropdown className='Ucak' title="Uçak">Uçak</NavDropdown>
            <NavDropdown className='Vize' title="Vize">Vize</NavDropdown>
            <NavDropdown className='OzelCozumler' title="Özel Çözümler" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Setur</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Halil Olcay </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Staj</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">SeturSetur link</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='Kampanyalar' title="Kampanyalar">Link</NavDropdown>


            <NavDropdown className='UyeOlGirisYap' title="Üye Ol/Giriş Yap" > Üye Ol/Giriş Yap
              
            </NavDropdown>
            <img
                src={personicon}
                className="iconperson"
                alt="some value"

              />
          </Nav>

        </Navbar.Collapse>

      </Navbar></div>
  );
}

export default NavBar;