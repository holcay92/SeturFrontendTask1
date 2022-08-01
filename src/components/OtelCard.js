import React from 'react'
import a1 from './images/navbarImages/otelImg.png';
import a2 from './images/navbarImages/otelImg.png';
import a3 from './images/navbarImages/otelImg.png';
import Carousel from 'react-bootstrap/Carousel';
import locationIcon from './images/navbarImages/locationIcon.svg';
import worldCardLogo from './images/otelCardIcons/world-card-logo.svg';
import infoIcon from './images/otelCardIcons/icon-info.svg';

function OtelCard() {
  return (
    <div className='OtelCard'>
      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-4">
            {/*carousel images section */}
            
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
            
            {/*carousel images section */}

            {/*hotel name and information section */}
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <div className='cardBodyLocationAndGuestRate'>
                <div className='OtelLokasyon'> <img className='LocationIcon' src={locationIcon} alt="info" />Kemer, Antalya</div>
                <div>
                  <div className='mukemmelMisafir'>
                    <p className='mukemmel'>Mükemmel</p>
                    <p className='misafirYorumu'>183 misafir yorumu</p>
                  </div>
                </div>
                <p className='yellowBack'> <i className='textInYellow'>6.0</i></p>
              </div>
              <h5 className="OtelAd">Concorde Luxury Resort Casino Convention & SPA</h5>
              <p className="UltraHerSeyDahil">Ultra Her Şey Dahil</p>
              <hr className='bidik'></hr>
              <p className="UltraHerSeyDahil"><small className="text-muted">· Balayı Oteli </small>
                <small className="text-muted">· Yetişkin Oteli </small>
                <small className="text-muted">· Çocuk Dostu </small></p>
              <div className='havuzSpaPlaj'>
                <p className='acikHavuzRectangle'>
                  <i className='acıkHavuz'>Açık Havuz</i>
                </p>
                <p className='spaRectangle'>
                  <i className='acıkHavuz'>Spa</i>
                </p>
                <p className='plajRectangle'>
                  <i className='acıkHavuz'>Plajlı</i>
                </p>
                <p className='extrafeatures'>
                  <i className='extrafeaturestext'>
                    +12</i>
                </p>
              </div>
            </div>
          </div>

          {/*hotel name and information section */}

          {/*price and select button information section */}
          <div className="col-md-4">
            <div className='pricing'>
              <div className="card-body">
                <div className='worldCardRectangle'>
                  <img className='worldCardLogo' src={worldCardLogo} alt='' />
                  <i className='worldCardTextOzel'>'e özel</i>
                  <p className='worldCardText12Taksit'> 12 taksit fırsatı</p>
                </div>
                <div>
                  <i className=''> Ücretsiz iptal</i>
                  <img className=' ' src={infoIcon} alt='' ></img>
                </div>
                <div className='onbesIndirim'>
                  <i className='onbesIndirimText'> %15 İNDİRİM</i>

                </div>
                <p className="card-text">price info</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <button className="OteliSecButton" > <p className="OteliSec">Oteli Seç</p> </button>
              </div>
            </div>
          </div>
          {/*price and select button information section */}
        </div>
      </div>
    </div>
  )
}
export default OtelCard