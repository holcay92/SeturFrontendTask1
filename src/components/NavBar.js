import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import seturlogo from './NavBarIcons/setur-logo.svg';
import personicon from './NavBarIcons/icon-person.svg';
import hamburgericon from './NavBarIcons/icon-hamburger.svg';
import phoneIcon from './NavBarIcons/phoneIcon.svg';
import topBlackRectangle from './NavBarIcons/topBlackRectangle.svg';
import topBlackShape from './NavBarIcons/topBlackShape.svg';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function NavBar() {
  return (
    <div className=''>
      {/*DESKTOP NAVBAR */}
      <div className="DesktopNavBar">
        <Navbar >
          <div>
            <img src={topBlackRectangle} className='topBlackRectangle' alt='' />
            <img src={topBlackShape} className='topBlackShape' alt='' />
            <div className='navBarhorizontal'>
              <Navbar.Brand href="https://www.setur.com.tr">
                <img src={seturlogo} className="seturLogoDesktop" alt="some value" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />

              <Navbar.Collapse className='navbarItems'>
                <Nav >
                  <NavDropdown className='Otel' title="Otel">Otel</NavDropdown>
                  <NavDropdown className='Tur' title="Tur" >Tur </NavDropdown>
                  <NavDropdown className='Gemi' title="Gemi">Gemi</NavDropdown>
                  <NavDropdown className='Ucak' title="Uçak">Uçak</NavDropdown>
                  <NavDropdown className='Vize' title="Vize">Vize</NavDropdown>
                  <NavDropdown className='OzelCozumler' title="Özel Çözümler" id="basic-nav-dropdown">
                    <NavDropdown.Item href="">Setur       </NavDropdown.Item>
                    <NavDropdown.Item href="">Halil Olcay </NavDropdown.Item>
                    <NavDropdown.Item href="">Staj        </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="">Setur link  </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown className='Kampanyalar' title="Kampanyalar">Link</NavDropdown>
                  <NavDropdown className='UyeOlGirisYap' title="Üye Ol/Giriş Yap" > Üye Ol/Giriş Yap
                  </NavDropdown>
                  <img src={personicon} className="iconperson" alt="some value" ></img>
                </Nav>
              </Navbar.Collapse>

            </div>
          </div>
          <div className='navBarhorizontalInBlack'>
            <img className='phoneIcon' src={phoneIcon} alt='' />
            <i className='phoneNumber'>444 28 22</i>
            <i className='yetkiliAcenteler'>Yetkili Acentalar</i>
            <div className='seturServisTuristikAS'>
              <i>Setur Servis Turistik A.Ş.</i><br></br>
              <i>Belge No: 728</i>
            </div>
          </div>
        </Navbar>
      </div>


      {/*MOBILE NAVBAR */}
      <div className='MobileNavBar' >
        <Navbar className='appMobileResponsive' >
          <Container fluid>
            <Row >
              <Col>
                <Navbar.Brand href="#https://www.setur.com.tr">
                  <img alt="" src={seturlogo} className="Setur-logo" />
                </Navbar.Brand>          </Col>
              <Col></Col><Col></Col><Col></Col>
              <Col> <Navbar.Toggle aria-controls="responsive-navbar-nav" />
<div></div>
                <div className='hamburgerDiv'>
                  <a href="#https://www.setur.com.tr"> <img src={personicon} className="iconperson" alt="some value" /></a>
                  <a href="#https://www.setur.com.tr"> <img src={hamburgericon} className="iconhamburger" alt="some value" /></a>
                </div></Col>
            </Row>
          </Container>






        </Navbar>
      </div>
    </div>


  );
}

export default NavBar;