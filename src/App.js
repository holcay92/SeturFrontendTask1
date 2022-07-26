import './Css/NavBar.css';
import './Css/UpBanner.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import UpBanner from './components/UpBanner';




function App() {
  return (
    <div className="App">
      <NavBar/>
     {/**/}
      <UpBanner/>
      
    </div>
    
  );
}

export default App;
