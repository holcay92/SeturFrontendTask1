//import { Carousel } from 'bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import a1 from './a1.jpg';
import a2 from './a2.png';
import a3 from './a3.jpg';


function UpBanner() {
    return (
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={a1}
              alt="First slide"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={a2}
              alt="Second slide"
            />
    
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={a3}
              alt="Third slide"
            />
    
            
          </Carousel.Item>
        </Carousel>
      );
    }

export default UpBanner