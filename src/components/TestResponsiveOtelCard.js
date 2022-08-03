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


function TestResponsiveOtelCard() {
    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className="d-flex justify-content-center row">
                    <div className="col-md-3">
                        <div className="container mb-5">
                            <div className="row-md-4">
                                filter sectionfilter sectionfilter sectionfilter sectionvfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter section
                                filter sectionfilter sectionfilter sectionfilter sectionvfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter section

                            </div>
                        </div>
                        <div className="container mb-5">
                            <div className="row-md-4">
                                filter sectionfilter sectionfilter sectionfilter sectionvfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter section
                                filter sectionfilter sectionfilter sectionfilter sectionvfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter section

                            </div>
                        </div>
                        <div className="container mb-5">
                            <div className="row-md-4">
                                filter sectionfilter sectionfilter sectionfilter sectionvfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter section
                                filter sectionfilter sectionfilter sectionfilter sectionvfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter sectionfilter section
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row p-1 bg-white border rounded">
                            <div className="col-md-3">
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
                            <div className="col-md-6 mt-1">
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
                                <div className="UltraHerSeyDahil">Ultra Her Şey Dahil</div>
                                <hr className='bidik'></hr>
                                {/* features division start */}
                                <div className="balayiYetiskinCocuk"><small className="text-muted">· Balayı Oteli </small>
                                    <small className="text-muted">· Yetişkin Oteli </small>
                                    <small className="text-muted">· Çocuk Dostu </small>
                                </div>
                                {/* features division end */}
                                {/* extra features division start */}
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
                                {/* extra features division end */}
                                {/* hopi division start */}
                                <div className="d-flex flex-row">
                                    <div className='hopiRectangle'>
                                        <div className='hopiDiv'>
                                            <img className='hopiLogo' src={hopiLogo} alt='' />
                                            <i className='hopiText'>Hopi'ye özel 1500 paracık hediye!</i>
                                        </div>
                                        <p className='hopiEkstra'>
                                            <i className='hopiEkstraSayi'>+2</i></p>
                                    </div>
                                </div>
                                {/* hopi division end */}
                            </div>
                            <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className='worldCardRectangle'>
                                    <img className='worldCardLogo' src={worldCardLogo} alt='' />
                                    <i className='worldCardTextOzel'>'e özel</i>
                                    <p className='worldCardText12Taksit'> 12 taksit fırsatı</p>
                                </div>
                                <div className='ucretsizIptalRectangle'>
                                    <p className='ucretsizIptal'> Ücretsiz iptal <img className='infoIcon ' src={infoIcon} alt='' /></p>
                                </div>
                                <div className='priceTag'>
                                    <div className='onbesIndirim'><i className='onbesIndirimText'>%15 İNDİRİM</i></div>
                                    <div className='euroPrice'> 132,72 EUR</div>

                                    <div className='rowC' >
                                        <i className='trPrice'>1.867 </i>
                                        <div><p className='trFiyatKusurat' > ,98</p>
                                            <p className='trKur' > TL</p>
                                        </div>
                                    </div>

                                    <p className="denBaslayanFiyat">'den başlayan fiyatlarla</p>
                                    <p className="ikiYetiskinUcGece">2 yetişkin 3 gece</p>
                                    <div className='ucretDetaylariRectangle'>
                                        <img className='infoIconGrey' src={infoIconGrey} alt='' />
                                        <i className='ucretDetaylari' > Ücret Detayları</i>
                                    </div>

                                </div>

                                <button className="OteliSecButton" > <p className="OteliSec">Oteli Seç</p> </button>
                            </div>
                        </div>



                        {/* example hotel card */}
                        <div className="row p-2 bg-white border rounded mt-2">
                            <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image" src={a1} /></div>
                            <div className="col-md-6 mt-1">
                                <h5>Concorde Luxury Resort Casino Convention & SPA</h5>
                                <div className="d-flex flex-row">
                                    <div className="ratings mr-2"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div><span>110</span>
                                </div>
                                <div className="mt-1 mb-1 spec-1"><span>100% cotton</span><span className="dot"></span><span>Light weight</span><span className="dot"></span><span>Best finish<br /></span></div>
                                <div className="mt-1 mb-1 spec-1"><span>Unique design</span><span className="dot"></span><span>For men</span><span className="dot"></span><span>Casual<br /></span></div>
                                <p className="text-justify text-truncate para mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br></br></p>
                            </div>
                            <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                    <h4 className="mr-1">$15.99</h4><span className="strike-text">$21.99</span>
                                </div>
                                <h6 className="text-success">Free shipping</h6>
                                <div className="d-flex flex-column mt-4"><button className="btn btn-primary btn-sm" type="button">Details</button><button className="btn btn-outline-primary btn-sm mt-2" type="button">Add to wishlist</button></div>
                            </div>
                        </div>
                        {/* example hotel card */}
                    </div>
                </div>
            </div>
        </div>


    )
}

export default TestResponsiveOtelCard