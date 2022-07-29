import React from 'react'
import otelimage from './images/navbarImages/otelImg.png';
import a1 from './images/navbarImages/otelImg.png';
import a2 from './images/navbarImages/otelImg.png';
import a3 from './images/navbarImages/otelImg.png';
import Carousel from 'react-bootstrap/Carousel';

function OtelCard() {
  return (
    <div className='OtelCard'>
      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-4">
{/*carousel images section */}            
            <div>
              <Carousel className='ImageCard' >
                <Carousel.Item className='Carousel.Item'>
                  <img className=' w-100' src={a1} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item className='Carousel.Item'>
                  <img className="d-block w-100" src={a2} alt="Second slide" />
                </Carousel.Item >
                <Carousel.Item className='Carousel.Item'>
                  <img className="d-block w-100" src={a3} alt="Third slide" />
                </Carousel.Item>
              </Carousel>
            </div>
{/*carousel images section */}   
  
{/*hotel name and information section */}             
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
{/*hotel name and information section */}  

{/*price and select button information section */}            
          <div className="col-md-4">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
{/*price and select button information section */} 
        </div>
      </div>
    </div>

  )
}

export default OtelCard