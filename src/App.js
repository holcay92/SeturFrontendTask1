import './index.css';
import './Css/NavBar.css'
import './Css/carouselUp.css'
import './Css/OtelCard1Image.css'
import './Css/OtelCard2Detail.css'
import './Css/OtelCard3Pricing.css'
import './Css/Footer.css'
import './Css/FooterUp.css'
import './Css/testtest.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import CarouselUp from './components/CarouselUp'
import Footer from './components/Footer'
import UpFooter from './components/UpFooter'
import IptalGuvenceBanner from './components/IptalGuvenceBanner'
import TestResponsiveOtelCard from './components/TestResponsiveOtelCard'
import TestCard from './components/TestCard'
import UpLeftFilter from './components/UpLeftFilter'
import MobileNavBar from './components/MobileNavBar'


function App() {

  return (
    <div className="App">

      {/*
      <MobileNavBar />
 
*/}
       <NavBar />
    
      <CarouselUp />

      <TestResponsiveOtelCard />

      <IptalGuvenceBanner />
      <UpFooter />
      <Footer />
    </div>

  );
}

export default App;
