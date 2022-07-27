import './Css/NavBar.css';
import './Css/UpBanner.css';
import './Css/OtelCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import UpBanner from './components/UpBanner';
import GroupExample from './components/GroupExample';
import Footer from './components/Footer';




function App() {
  
  return (
    <div className="App">
      <NavBar/>
     {/**/}
      <UpBanner/>
    <GroupExample></GroupExample>
      
      
     
      <Footer></Footer>
    </div>
    
  );
}

export default App;
