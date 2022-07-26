import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/esm/NavLink';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import seturlogo from './setur-logo.svg';
import personicon from './icon-person.svg';
import topBlackShape from './topBlackShape.svg';
import topBlackRectangle from './topBlackRectangle.svg';

function NavBar() {
  return (

    <Container>


<Container>
              <img
                src={topBlackRectangle}
                className="topBlackRectangle"
                alt="some value" />
              <img
                src={topBlackShape}
                className="topBlackShape"
                alt="some value" />
            </Container>
      <Navbar className="Rectangle" bg="light" expand="lg"  >
      

        <Container>
        
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


              <NavDropdown className='Otel' title="Otel">Otel</NavDropdown>
              <NavDropdown className='Tur' title="Tur">Tur</NavDropdown>
              <NavDropdown className='Gemi' title="Gemi">Gemi</NavDropdown>
              <NavDropdown className='Ucak' title="Uçak">Uçak</NavDropdown>
              <NavDropdown className='Vize' title="Vize">Vize</NavDropdown>
              <NavDropdown className='OzelCozumler' title="Özel Çözümler" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className='Kampanyalar' title="Kampanyalar">Link</NavDropdown>

              <NavLink className='uyeOlGirisYap' title="uyeOlGirisYap">  Üye Ol/Giriş Yap
                <img
                  src={personicon}
                  className="iconperson"
                  alt="some value"

                />
              </NavLink>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar></Container>
  );
}

export default NavBar;