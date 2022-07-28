import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import seturfootericon from './images/footerImages/seturfootericon.svg';
import rightArrow from './images/footerImages/rightarrowicon.svg';



function Footer() {
    return (

        <MDBFooter backgroundColor='black' className='Footer' style={{ backgroundColor: 'dimgrey' }} >
           
           
            <section className=''>
                <CardGroup className=''>
                    <Card className='whatsappCard'>
                        <Card.Body className='whatsappCardBody' >
                            <div className='Whatsapp' >
                                <h3 className='Whatsapp'>WhatsApp
                                    <p className='whatsappNumber'> <a className='whatsappNumber' href="tel:0549 804 67 00">
                                        0549 804 67 00 </a> </p></h3>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className='callCenterCard'>
                        <Card.Body className='callCenterCardBody' >
                            <div className='callCenter' >
                                <h3 className='callCenter'>Çağrı Merkezi
                                    <p><a className='callCenterNumber' href="tel:444 28 22">
                                        444 28 22 </a></p>
                                </h3>

                            </div>
                        </Card.Body>
                    </Card>
                </CardGroup>

                <div className='container text-center text-md-start mt-5'>
                    <div className='row mt-3'>
                        <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <img className='seturfootericon' src={seturfootericon} alt='' />
                            </h6>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>
                                    Hakkımızda
                                </a>
                            </p>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>
                                    Ödeme Seçenekleri
                                </a>
                            </p>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>
                                    Hediye Kartı
                                </a>
                            </p>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>
                                    Acenta Başvuru Formu
                                </a>
                            </p>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>
                                    Kampanyalar
                                </a>
                            </p>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>
                                    Broşürler
                                </a>
                            </p>
                        </div>

                        <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='oteller'>Oteller</h6>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>
                                    Belek Otelleri
                                </a>
                            </p>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>
                                    Kıbrıs Otelleri
                                </a>
                            </p>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>
                                    Side Otelleri
                                </a>
                            </p>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>
                                    Marmaris Otelleri
                                </a>
                            </p>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>
                                    Çeşme Otelleri
                                </a>
                            </p>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>
                                    Tüm Oteller <img className='rightarrowicon' src={rightArrow} alt='' />
                                </a>
                            </p>
                        </div>

                        <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='otelTemaları'>Otel Temaları</h6>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>
                                    Erken Rezervasyon Otelleri
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>
                                    Kıbrıs Otelleri
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>
                                    Balayı Otelleri
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>
                                    Son Dakika Tatil Fırsatları
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>
                                    Bayram Otelleri
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>
                                    Tüm Otel Temaları <img className='rightarrowicon' src={rightArrow} alt='' />
                                </a>
                            </p>
                        </div>
                        <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='oteller'>Turlar</h6>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>
                                    Erken Rezervasyon Otelleri
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>
                                    Kıbrıs Otelleri
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>
                                    Balayı Otelleri
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>
                                    Son Dakika Tatil Fırsatları
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>
                                    Bayram Otelleri
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>
                                    Tüm Otel Temaları <img className='rightarrowicon' src={rightArrow} alt='' />
                                </a>
                            </p>
                        </div>
                        <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='digerHizmetlerimiz'>Diğer Hizmetlerimiz</h6>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>
                                    Erken Rezervasyon Otelleri
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>
                                    Kıbrıs Otelleri
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>
                                    Balayı Otelleri
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>
                                    Son Dakika Tatil Fırsatları
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>
                                    Bayram Otelleri
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>
                                    Tüm Otel Temaları <img className='rightarrowicon' src={rightArrow} alt='' />
                                </a>
                            </p>
                        </div>
                        <div></div>

                        <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='oteller'>İletişim</h6>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>
                                    İletişim Bilgileri
                                </a>
                            </p>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>
                                    İletişim Formu
                                </a>
                            </p>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>
                                    Yetkili Acentalar
                                </a>
                            </p>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>
                                    Öneri Şikayer Formu
                                </a>
                            </p>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>
                                    Sıkça Sorulan Sorular
                                </a>
                            </p>

                        </div>
                    </div>
                </div>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                {"© 2022 Copyright : "}
                <a className='text-reset fw-bold' href='www.setur.com.tr'>
                    www.setur.com.tr
                </a>
            </div>
        </MDBFooter>
    );
}
export default Footer;