//import { Carousel } from 'bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import a1 from './UpBannerImages/a1.jpg';
import a2 from './UpBannerImages/a2.png';
import a3 from './UpBannerImages/a3.jpg';



function UpBanner() {
    return (
        <Carousel  className='UpBanner'>
          <Carousel.Item >
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