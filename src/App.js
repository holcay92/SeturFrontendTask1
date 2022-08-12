import './index.css';
import './Css/App.css'
import './Css/NavBar.css'
import './Css/carouselUp.css'
import './Css/OtelCard1Image.css'
import './Css/OtelCard2Detail.css'
import './Css/OtelCard3Pricing.css'
import './Css/Footer.css'
import './Css/FilterTop.css'
import './Css/FilterUp2.css'
import './Css/HotelCardMediaQueries.css'
import './Css/HotelCardMobile.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import CarouselUp from './components/CarouselUp'
import Footer from './components/Footer'
import FooterUp from './components/FooterUp'
import IptalGuvenceBanner from './components/IptalGuvenceBanner'
import DesktopHotelCardAndUpFilterComponents from './components/DesktopHotelCardAndUpFilterComponents.js'
import HotelCardMobile from './components/HotelCardMobile';
import FilterUpMobile from './components/FilterUpMobile'
import FooterMobile from './components/FooterMobile';
import FooterUpMobile from './components/FooterUpMobile';


function App() {

  return (
    <div className="App">
      {/*     
      <IptalGuvenceBanner />
      <FooterUp />
      <Footer />
     
      */}

      <NavBar />
      <FilterUpMobile />
      <CarouselUp />
      <DesktopHotelCardAndUpFilterComponents />
      <HotelCardMobile />
      <HotelCardMobile />
      <HotelCardMobile />
      <HotelCardMobile />
      
      <FooterUpMobile />
      <FooterMobile />
      
    </div>
  );
}

export default App;
