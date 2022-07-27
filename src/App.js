import './Css/NavBar.css';
import './Css/UpBanner.css';
import './Css/OtelCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import UpBanner from './components/UpBanner';
import GroupExample from './components/GroupExample';






function App() {
  
  return (
    <div className="App">
      <NavBar/>
     {/**/}
      <UpBanner/>
    <GroupExample></GroupExample>
      
      
     
      
    </div>
    
  );
}

export default App;
