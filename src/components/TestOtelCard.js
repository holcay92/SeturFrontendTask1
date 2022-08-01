import React from 'react'
import a1 from './images/navbarImages/otelImg.png';
import a2 from './images/navbarImages/otelImg.png';
import a3 from './images/navbarImages/otelImg.png';
import Carousel from 'react-bootstrap/Carousel';
import locationIcon from './images/navbarImages/locationIcon.svg';
import checkMark from './images/otelCardIcons/checkmark.svg';

function TestOtelCard() {
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
                  <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                    <h4 className="card-title">Setur Software Department</h4>
                    <h6 className="card-subtitle mb-2">Ümraniye-İstanbul</h6>
                    <p className="card-text">Setur Ar-ge </p>
                    <div className="link d-flex">
                      <a href="www.setur.com.tr" className="card-link text-warning">More Info</a>
                      <a href="www.setur.com.tr" className="card-link text-warning">Save as Favourite</a>
                    </div>
                    <p className='SeturOneriyor'>
                      <img className='checkMark' src={checkMark} alt='' ></img>
                      <i className='SeturOneriyorText'> Setur Öneriyor </i>
                    </p>

                  </div>
                </Carousel.Item>
                <Carousel.Item className='Carousel.Item'>
                  <img className="d-block w-100" src={a2} alt="Second slide" />
                  <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                    <h4 className="card-title">Setur Software Department</h4>
                    <h6 className="card-subtitle mb-2">Ümraniye-İstanbul</h6>
                    <p className="card-text">Setur Ar-ge </p>
                    <div className="link d-flex">
                      <a href="www.setur.com.tr" className="card-link text-warning">More Info</a>
                      <a href="www.setur.com.tr" className="card-link text-warning">Save as Favourite</a>
                    </div>
                    <p className='SeturOneriyor'>
                      <img className='checkMark' src={checkMark} alt='' ></img>
                      <i className='SeturOneriyorText'> Setur Öneriyor </i>
                    </p>
                  </div>
                </Carousel.Item >
                <Carousel.Item className='Carousel.Item'>
                  <img className="d-block w-100" src={a3} alt="Third slide" />
                  <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                    <h4 className="card-title">Setur Software Department</h4>
                    <h6 className="card-subtitle mb-2">Ümraniye-İstanbul</h6>
                    <p className="card-text">Setur Ar-ge </p>
                    <div className="link d-flex">
                      <a href="www.setur.com.tr" className="card-link text-warning">More Info</a>
                      <a href="www.setur.com.tr" className="card-link text-warning">Save as Favourite</a>
                    </div>
                    <p className='SeturOneriyor'>
                      <img className='checkMark' src={checkMark} alt='' ></img>
                      <i className='SeturOneriyorText'> Setur Öneriyor </i>
                    </p>
                  </div>
                </Carousel.Item>

              </Carousel>
            </div>
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
                <h5 className="card-title">world</h5>
                <p className="card-text">price info</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>

          </div>
          {/*price and select button information section */}
        </div>
      </div>
    </div>

  )
}

export default TestOtelCard