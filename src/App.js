import './Css/NavBar.css'
import './Css/carouselUp.css'
import './Css/OtelCard.css'
import './Css/Footer.css'
import './Css/FooterUp.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import CarouselUp from './components/CarouselUp'
import Footer from './components/Footer'
import UpFooter from './components/UpFooter'

import CommercialBanner from './components/CommercialBanner'
import OtelCard from './components/OtelCard'
import TestOtelCard from './components/TestOtelCard'

function App() {

  return (
    <div className="App">
      <NavBar />
      {/*<GroupExample/>
      
      */}
      <CarouselUp />
      <OtelCard />
      <CommercialBanner />
      <TestOtelCard/>
      <UpFooter />
      <Footer />
    </div>

  );
}

export default App;
