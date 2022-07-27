import './Css/NavBar.css';
import './Css/UpBanner.css';
import './Css/OtelCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import UpBanner from './components/UpBanner';
import OtelCard from './components/OtelCard';




function App() {
  document.addEventListener("DOMContentLoaded", function(){
    // make it as accordion for smaller screens
    if (window.innerWidth > 992) {
    
      document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
    
        everyitem.addEventListener('mouseover', function(e){
    
          let el_link = this.querySelector('a[data-bs-toggle]');
    
          if(el_link != null){
            let nextEl = el_link.nextElementSibling;
            el_link.classList.add('show');
            nextEl.classList.add('show');
          }
    
        });
        everyitem.addEventListener('mouseleave', function(e){
          let el_link = this.querySelector('a[data-bs-toggle]');
    
          if(el_link != null){
            let nextEl = el_link.nextElementSibling;
            el_link.classList.remove('show');
            nextEl.classList.remove('show');
          }
    
    
        })
      });
    }
    // end if innerWidth
    }); 
  return (
    <div className="App">
      <NavBar/>
     {/**/}
      <UpBanner/>
      <OtelCard></OtelCard>
     
      
    </div>
    
  );
}

export default App;
