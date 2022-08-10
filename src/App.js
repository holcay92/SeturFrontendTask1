import './index.css';
import './Css/App.css'
import './Css/NavBar.css'
import './Css/carouselUp.css'
import './Css/OtelCard1Image.css'
import './Css/OtelCard2Detail.css'
import './Css/OtelCard3Pricing.css'
import './Css/Footer.css'
import './Css/FooterUp.css'
import './Css/FilterUpLeft.css'
import './Css/FilterUp2.css'
import './Css/HotelCard.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import CarouselUp from './components/CarouselUp'
import Footer from './components/Footer'
import UpFooter from './components/UpFooter'
import IptalGuvenceBanner from './components/IptalGuvenceBanner'
import TestResponsiveOtelCard from './components/TestResponsiveOtelCard'
import HotelCardMobile from './components/HotelCardMobile';



function App() {

  return (
    <div className="App">
      <div className='col-md-12'>

     

      {/*
      <MobileNavBar />
 <IptalGuvenceBanner />
       
*/}
       <NavBar />
    
      <CarouselUp />
      <TestResponsiveOtelCard />
      <HotelCardMobile/>
     <UpFooter />
      <Footer />
    </div>
    </div>
  );
}

export default App;
