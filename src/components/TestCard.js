import React from 'react'
import a1 from './images/navbarImages/otelImg.png';
import a2 from './images/navbarImages/otelImg.png';
import a3 from './images/navbarImages/otelImg.png';
import Carousel from 'react-bootstrap/Carousel';
import checkMark from './images/otelCardIcons/checkmark.svg';
import locationIcon from './images/navbarImages/locationIcon.svg';
import worldCardLogo from './images/otelCardIcons/world-card-logo.svg';
import infoIcon from './images/otelCardIcons/icon-info.svg';
import hopiLogo from './images/otelCardIcons/hopi-logo.svg';
import infoIconGrey from './images/otelCardIcons/icon-info-grey.svg';

function TestCard() {
    return (
        <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="e-card-horizontal">
                <div className="row bg-white border rounded ">

                    {/* hotel card image */}
                    <div className="col-md-3">
                        <Carousel className='ImageCard' >
                            <Carousel.Item className='Carousel.Item'>
                                <img className=' w-100' src={a1} alt="First slide" />
                                <div className="card-img-overlay text-white d-flex flex-column justify-content-center">

                                    <h4 className="card-title">Setur Software Department</h4>


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


                                    <p className='SeturOneriyor'>
                                        <img className='checkMark' src={checkMark} alt='' ></img>
                                        <i className='SeturOneriyorText'> Setur Öneriyor </i>
                                    </p>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    <div className="col-md-6" >
                        <div className='testCardMarginLeft'>
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
                            <h5 >
                                <i className='OtelAd'>Concorde Luxury Resort Casino Convention & SPA</i>
                            </h5>
                            <div className="UltraHerSeyDahil">Ultra Her Şey Dahil</div>
                            <hr className='bidik'></hr>

                            {/* features division start */}
                            <div className="balayiYetiskinCocuk"><small className="text-muted">· Balayı Oteli </small>
                                <small className="text-muted">· Yetişkin Oteli </small>
                                <small className="text-muted">· Çocuk Dostu </small>
                            </div>
                            {/* features division end */}

                            {/* extra features division start */}
                            <div className='rowHorizontal'>
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
                            {/* extra features division end */}

                            {/* hopi division start */}
                            <div className="d-flex flex-row">
                                <div className="hopiDiv">
                                    <div className='rowHorizontal'>
                                        <img className='hopiLogo' src={hopiLogo} alt='' />
                                        <p className='hopiText'>Hopi'ye özel 1500 paracık hediye!</p>
                                    </div>
                                </div>
                                <div className='hopiEkstra'>
                                    <p className='hopiEkstraSayi'>+2</p>
                                </div>

                            </div>
                            {/* hopi division end */}

                        </div>
                    </div>
                    <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                        <div className="d-flex flex-row align-items-center">
                            <h4 className="mr-1">1867,98 TL</h4><span className="strike-text">132,72 EUR</span>
                        </div>
                        <h6 className="text-success">'den başlayan fiyatlarla</h6>
                        <div className="d-flex flex-row mt-5">
                            <button className="OteliSecButton" > <p className="OteliSec">Oteli Seç</p> </button>
                        </div>
                    </div>
                </div>
                {/* example hotel card */}
            </div>
        </div>
    )
}

export default TestCard