import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import checkMark from './images/otelCardIcons/checkmark.svg';
import hotelImgMobile from './images/otelCardIcons/hotel-img.webp';
import hotelImgMobile2 from './images/otelCardIcons/hotel-img2.webp';
import hotelImgMobile3 from './images/otelCardIcons/hotel-img3.webp';
import locationIcon from './images/navbarImages/locationIcon.svg';
import worldCardLogo from './images/otelCardIcons/world-card-logo.svg';
import infoIcon from './images/otelCardIcons/icon-info.svg';
import iconPool from './images/otelCardIcons/poolIcon.svg';
import iconSpa from './images/otelCardIcons/spaIcon.svg';
import iconBeach from './images/otelCardIcons/icon-info.svg';
import hopiLogo from './images/otelCardIcons/hopi-logo.svg';
import infoIconGrey from './images/otelCardIcons/icon-info-grey.svg';
import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function HotelCardMobile() {
    return (
        <div className='HotelCardMobile' >
            <div className="MaskMobile" >
               
                        <Carousel className='imgHotelMobile' >
                            <Carousel.Item className='Carousel.Item'>
                                <img className=' w-100' src={hotelImgMobile} alt="First slide" />
                                <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                    <h4 className="card-title">Mobile Responsive</h4>
                                    <div className='seturOneriyorRectangleMobile'>
                                        <p className='seturOneriyorTextMobile'>
                                            <img className='iconCheckMarkMobile' src={checkMark} alt='' ></img>
                                            Setur Öneriyor </p>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className='Carousel.Item'>
                                <img className="d-block w-100" src={hotelImgMobile2} alt="Second slide" />
                                <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                    <h4 className="card-title">Mobile Responsive</h4>

                                    <div className='seturOneriyorRectangleMobile'>
                                        <p className='seturOneriyorTextMobile'>
                                            <img className='iconCheckMarkMobile' src={checkMark} alt='' ></img>
                                            Setur Öneriyor </p>
                                    </div>
                                </div>
                            </Carousel.Item >
                            <Carousel.Item className='Carousel.Item'>
                                <img className="d-block w-100" src={hotelImgMobile3} alt="Third slide" />
                                <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                    <h4 className="card-title">Mobile Responsive</h4>
                                    <div className='seturOneriyorRectangleMobile'>
                                        <p className='seturOneriyorTextMobile'>
                                            <img className='iconCheckMarkMobile' src={checkMark} alt='' ></img>
                                            Setur Öneriyor </p>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                  
                        <div className='hotelCardDetailMobileFlex'>
                            <div className="cardDetailMobileForPadding">
                                <div className='hotelLocationGuestRateMobile'>
                                    <div className='locationInfoMobile'>
                                        <img className='iconLocationMobile' src={locationIcon} alt="info" />
                                        <span className="hotelLocationMobile">
                                            Kemer, Antalya
                                        </span>
                                    </div>
                                    <div className='GuestRateMobile'>
                                        <div className='mukemmelAndCommentMobile'>
                                            <span className="mukemmelTextMobile">Mükemmel</span>
                                            <p className="guestCommentTextMobile">183 misafir yorumu</p>
                                        </div>
                                        <div className="greenRectangleMobile">
                                            <span className='greenRectangleTextMobile'>9,2</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="hotelNameMobile">Concorde Luxury Resort Casino Convention & SPA</p>
                                <span className="ultraHerSeyDahilMobile"> Ultra Her Şey Dahil</span>
                                <div className="bidikMobile"></div>
                            </div>
                            <div className='hotelCardMiddleSectionMobile'>
                                <div>
                                    <div className="ucretsizIptalRectangleMobile">
                                        <p className="ucretsizIptalTextMobile">
                                            Ücretsiz iptal
                                            <img src={infoIcon} className='iconInfoMobile' alt="info" />
                                        </p>
                                    </div>
                                    <div className="yuzdeOnbesRectangleMobile">
                                        <p className="yuzdeOnbesTextMobile">%15 İNDİRİM</p>
                                    </div>
                                    <div className="worldCardRectangleMobile">
                                        <div className="eOzelTextMobile">
                                            <img className='worldCardLogoMobile' src={worldCardLogo} alt="info" />
                                            ‘e özel
                                            <p className="onIkıTaksitMobile">12 taksit fırsatı!</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <span className="indirimsizTutarMobile"><del>2.200,99 TL</del></span>
                                    <div className='d-flex'>
                                        <div>
                                            <p className="hotelPriceMobile">1.867</p>
                                        </div>
                                        <div>
                                            <p className="hotelPriceFractionMobile">,98</p>
                                            <p className='tlTextMobile'> TL</p>
                                        </div>
                                    </div>

                                    <p className="denBaslayanFiyatlarlaTextMobile">‘den başlayan fiyatlarla</p>
                                    <p className="kacKisiKacGeceMobile">2 kişi 3 gece</p>
                                    <span className="ucretDetaylarıMobile">
                                        <img src={infoIconGrey} className='iconInfoUcretDetaylarıMobile' alt="info" />
                                        <u>Ücret Detayları</u>
                                    </span>
                                </div>
                            </div>

                            <span className="yetiskinOteliTextMobile">· Yetişkin Oteli</span>
                            <span className="balayıOtelTextMobile">· Balayı Oteli</span>
                            <span className="cocukDostuTextMobile">· Çocuk Dostu</span>

                            <div className='OzellikRectangle'>
                                <div className="acikHavuzRectangleMobile">
                                    <p className="acikHavuzTextMobile">
                                        <img src={iconPool} className='iconPoolMobile' alt="info" />
                                        Açık Havuz
                                    </p>
                                </div>
                                <div className="spaRectangleMobile">
                                    <p className="spaTextMobile">
                                        <img src={iconSpa} className='iconSpaMobile' alt="info" />
                                        Spa
                                    </p>
                                </div>
                                <div className="plajRectangleMobile">
                                    <p className="plajTextMobile">
                                        <img src={iconSpa} className='iconSpaMobile' alt="info" />
                                        Plajlı
                                    </p>
                                </div>
                            </div>
                            <div className='hopiBigRectangleMobile'>
                                <div className="hopiRectangleMobile">
                                    <p className="hopiTextMobile"><img className='hopiLogoMobile' src={hopiLogo} alt="info" /> Hopi’ye özel 1500 paracık hediye!</p>
                                </div>
                                <div className="hopiRectangle2Mobile"><p className='hopiArtı2TextMobile'>+2</p>
                                </div>
                            </div>
                            <div>
                                <button className="oteliSecButton"  >
                                    <p className='oteliSecButtonText'>Oteli Seç</p>
                                </button>
                            </div>
                        </div>
                
            </div>

        </div>
    )
}

export default HotelCardMobile