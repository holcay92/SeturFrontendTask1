import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';
import facebookIcon from './images/footerImages/facebook.svg';
import InstagramIcon from './images/footerImages/instagram.svg';
import TwitterIcon from './images/footerImages/twitter.svg';
import PinterestIcon from './images/footerImages/pinterest.svg';
import YoutubeIcon from './images/footerImages/youtube.svg';
import seturfootericon from './images/footerImages/seturfootericon.svg';
import appledownload from './images/footerImages/appledownload.png';
import androiddownload from './images/footerImages/androiddownload.png';
import rightArrow from './images/footerImages/rightarrowicon.svg';

function Footer() {
    return (

        <MDBFooter backgroundColor='black' className='Footer' style={{ backgroundColor: 'grey' }} >
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>

                <div className='socialmedia' style={{ backgroundColor: 'white' }} >
                    <a href='www.setur.com.tr' className='me-4 text-reset'>
                        <img className='facebookicon' src={facebookIcon} alt='' />
                        <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href='www.setur.com.tr' className='me-4 text-reset'>
                        <img className='facebookicon' src={TwitterIcon} alt='' />
                        <i className='fab fa-twitter'></i>
                    </a>
                    <a href='www.setur.com.tr' className='me-4 text-reset'>
                        <img className='facebookicon' src={PinterestIcon} alt='' />
                        <i className='fab fa-instagram'></i>
                    </a>
                    <a href='www.setur.com.tr' className='me-4 text-reset'>
                        <img className='facebookicon' src={InstagramIcon} alt='' />
                        <i className='fab fa-instagram'></i>
                    </a>
                    <a href='www.setur.com.tr' className='me-4 text-reset'>
                        <img className='facebookicon' src={YoutubeIcon} alt='' />
                        <i className='fab fa-linkedin'></i>
                    </a>
                    <a href='www.setur.com.tr' className='me-4 text-reset'>
                        <img className='appledownload' src={appledownload} alt='' />
                        <i className='fab fa-linkedin'></i>
                    </a>
                    <a href='www.setur.com.tr' className='me-4 text-reset'>
                        <img className='androiddownload' src={androiddownload} alt='' />
                        <i className='fab fa-linkedin'></i>
                    </a>

                </div>
            </section>

            <section className=''>
                <div className='container text-center text-md-start mt-5'>
                    <div className='row mt-3'>
                        <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <img className='seturfootericon' src={seturfootericon} alt='' />


                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                            </p>
                        </div>

                        <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Oteller</h6>
                            <p>
                                <a href='www.setur.com.tr' className='text-reset'>
                                    Belek Otelleri
                                </a>
                            </p>
                            <p>
                                <a href='www.setur.com.tr' className='text-reset'>
                                    Kıbrıs Otelleri
                                </a>
                            </p>
                            <p>
                                <a href='www.setur.com.tr' className='text-reset'>
                                    Side Otelleri
                                </a>
                            </p>
                            <p>
                                <a href='www.setur.com.tr' className='text-reset'>
                                    Marmaris Otelleri
                                </a>
                            </p>
                            <p>
                                <a href='www.setur.com.tr' className='text-reset'>
                                    Çeşme Otelleri
                                </a>
                            </p>
                            <p>
                                <a href='www.setur.com.tr' className='text-reset'>
                                    Tüm Oteller <img src={rightArrow} alt=''/>
                                </a>
                            </p>
                        </div>

                        <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Otel Temaları</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Erken Rezervasyon Otelleri
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Kıbrıs Otelleri
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Balayı Otelleri
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                   Son Dakika Tatil Fırsatları
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                   Bayram Otelleri
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                   Tüm Otel Temaları <img src={rightArrow} alt=''/>
                                </a>
                            </p>
                        </div>

                        <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Turlar</h6>
                            <p>
                                <i className='fas fa-home me-3'></i> Istanbul, 34400, Türkiye
                            </p>
                            <p>
                                <i className='fas fa-envelope me-3'></i>
                                info@setur.com.tr
                            </p>
                            <p>
                                <i className='fas fa-phone me-3'></i> + 90 216 xxx xx xx
                            </p>
                            <p>
                                <i className='fas fa-print me-3'></i> + 90 216 xxx xx xx
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2022 Copyright:
                <a className='text-reset fw-bold' href='www.setur.com.tr'>
                    www.setur.com.tr
                </a>
            </div>
        </MDBFooter>
    );
}
export default Footer;