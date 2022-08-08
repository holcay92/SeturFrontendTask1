import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import seturlogo from './NavBarIcons/setur-logo.svg';
import personicon from './NavBarIcons/icon-person.svg';
import phoneIcon from './NavBarIcons/phoneIcon.svg';

function NavBar() {
  return (
    <div className="DesktopNavBar">
      <Navbar className="DesktopNavBar" bg="light"  >
        <div className='navBarhorizontal'>
          <Navbar.Brand className='Setur-logo' href="https://www.setur.com.tr">
            <img src={seturlogo} className="Setur-logo" alt="some value" /></Navbar.Brand>
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
                <NavDropdown.Item href="#action/3.4">Setur link</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className='Kampanyalar' title="Kampanyalar">Link</NavDropdown>
              <NavDropdown className='UyeOlGirisYap' title="Üye Ol/Giriş Yap" > Üye Ol/Giriş Yap
              </NavDropdown>
              <img src={personicon} className="iconperson" alt="some value" />
            </Nav>
          </Navbar.Collapse>
          <div className='navBarhorizontalInBlack'>
            <img className='phoneIcon' src={phoneIcon} alt='' />
            <i className='phoneNumber'>444 28 22</i>
            <i className='yetkiliAcenteler'>Yetkili Acentalar</i>
            <div className='seturServisTuristikAS'>
              <i>Setur Servis Turistik A.Ş.</i>
              <p>Belge No: 728</p>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default NavBar;