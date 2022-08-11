//import { Carousel } from 'bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import a1 from './UpBannerImages/a1.jpg';
import a2 from './UpBannerImages/a2.png';
import a3 from './UpBannerImages/a3.jpg';
import Form from 'react-bootstrap/Form';
import FilterTop from './FilterTop';
import { Container } from 'react-bootstrap';


function CarouselUp() {
  return (
    <div className='CarouselBanner'>
      <div className='container mt-5 mb-5' >
        <div className="d-flex justify-content-center row">
          <div className="col-md-12 col-sm-12 row">
            <div className="col-md-3">
              <FilterTop />
            </div>
            <div className="col-md-9">
              <Carousel className='Carousel' >
                <Carousel.Item className='Carousel.Item'>
                  <img className=' d-block w-100' src={a1} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item className='Carousel.Item'>
                  <img className="d-block w-100" src={a2} alt="Second slide" />
                </Carousel.Item >
                <Carousel.Item className='Carousel.Item'>
                  <img className="d-block w-100" src={a3} alt="Third slide" />
                </Carousel.Item>
              </Carousel>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default CarouselUp