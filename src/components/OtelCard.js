import React from 'react'
import otelimage from './images/navbarImages/otelImg.png';
import a1 from './images/navbarImages/otelImg.png';
import a2 from './images/navbarImages/otelImg.png';
import a3 from './images/navbarImages/otelImg.png';
import Carousel from 'react-bootstrap/Carousel';
import locationIcon from './images/navbarImages/locationIcon.svg';
import poolicon from './images/otelCardIcons/poolIcon.svg';

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
              <div className='OtelLokasyon'> <img className='LocationIcon' src={locationIcon} alt="info" />Kemer, Antalya
              </div>
              <h5 className="OtelAd">Concorde Luxury Resort Casino Convention & SPA</h5>

              <p className="UltraHerSeyDahil">Ultra Her Şey Dahil</p>
              <hr className='bidik'></hr>
              <p className="UltraHerSeyDahil"><small className="text-muted">· Balayı Oteli </small>
                <small className="text-muted">· Yetişkin Oteli </small>
                <small className="text-muted">· Çocuk Dostu </small></p>

           

                  <p className='acikHavuzRectangle'>
                    <i className='acıkHavuz'>Açık Havuz</i>
                  </p>
                  <p className='spaRectangle'>
                    <i className='acıkHavuz'>Spa</i>
                  </p>
                  <p className='plajRectangle'>
                    <i className='acıkHavuz'>Plajlı</i>                
              </p>
            </div>
          </div>
          {/*hotel name and information section */}

          {/*price and select button information section */}
          <div className="col-md-4">
            <div className="card-body">
              <h5 className="card-title">world</h5>
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