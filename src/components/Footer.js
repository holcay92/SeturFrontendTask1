import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';
import seturfootericon from './images/footerImages/seturfootericon.svg';
import rightArrow from './images/footerImages/rightarrowicon.svg';
import koclogo from './images/footerImages/koc.svg';
import visalogo from './images/footerImages/visa.png';
import tursablogo from './images/footerImages/tursab.svg';
//company logos
import seturDutyFree from './images/footerImages/seturCompanies/seturdutyfree.png'
import seturday from './images/footerImages/seturCompanies/seturday-logo.png'
import seturSelect from './images/footerImages/seturCompanies/seturselect.png'
import seturBiz from './images/footerImages/seturCompanies/seturbiz.png'
import seturMice from './images/footerImages/seturCompanies/seturmice.png'
import sedventure from './images/footerImages/seturCompanies/sedadventure.png'
import seturCruise from './images/footerImages/seturCompanies/seturcruise.png'
import seturAcademia from './images/footerImages/seturCompanies/seturacademia.png'

function Footer() {
    return (

        <MDBFooter className='Footer'  >


            <section >
                <div className="PhoneCallDiv">
                    <div className='whatsAppBack'>
                        <p className='whatsAppText'><i></i> Whatsapp</p>
                        <p ><a className='whatsAppNumber' href="tel:0-546-786-68-00">0546 786 68 00</a> </p>
                        
                       
                    </div>

                    <div className='callCenterBack'>
                        <p className='callCenterText'><i></i> Çağrı Merkezi</p>
                        <p ><a className='callCenterNumber' href='tel:444 28 22'>444 28 22</a> </p>
                    </div>
                </div>


                <div className='container text-center text-md-start mt-5'>
                    <div className='d-flex justify-content-center'>
                        <div className='col-md-6 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <img className='seturfootericon' src={seturfootericon} alt='' />
                            </h6>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>Hakkımızda</a>
                            </p>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>Ödeme Seçenekleri</a>
                            </p>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>Hediye Kartı</a>
                            </p>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>Acenta Başvuru Formu</a>
                            </p>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>Kampanyalar</a>
                            </p>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>Broşürler</a>
                            </p>
                        </div>

                        <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='oteller'>Oteller</h6>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>Belek Otelleri</a>
                            </p>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>Kıbrıs Otelleri</a>
                            </p>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>Side Otelleri</a>
                            </p>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>Marmaris Otelleri</a>
                            </p>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>Çeşme Otelleri</a>
                            </p>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>Tüm Oteller <img className='rightarrowicon' src={rightArrow} alt='' /></a>
                            </p>
                        </div>

                        <div className='col-md-4 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='otelTemaları'>Otel Temaları</h6>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>Erken Rezervasyon Otelleri</a>
                            </p>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>Kıbrıs Otelleri</a>
                            </p>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>Balayı Otelleri</a>
                            </p>
                            <p >
                                <a href='#!' className='footerSubtitleColor'>Son Dakika Tatil Fırsatları</a>
                            </p>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>Bayram Otelleri</a>
                            </p>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>Tüm Otel Temaları <img className='rightarrowicon' src={rightArrow} alt='' /></a>
                            </p>
                        </div>
                        <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='oteller'>Turlar</h6>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>Erken Rezervasyon Otelleri</a>
                            </p>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>Kıbrıs Otelleri</a>
                            </p>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>Balayı Otelleri</a>
                            </p>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>Son Dakika Tatil Fırsatları</a>
                            </p>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>Bayram Otelleri</a>
                            </p>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>Tüm Otel Temaları <img className='rightarrowicon' src={rightArrow} alt='' /></a>
                            </p>
                        </div>
                        <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='digerHizmetlerimiz'>Diğer Hizmetlerimiz</h6>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>Erken Rezervasyon Otelleri</a>
                            </p>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>Kıbrıs Otelleri</a>
                            </p>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>Balayı Otelleri</a>
                            </p>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>Son Dakika Tatil Fırsatları</a>
                            </p>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>Bayram Otelleri</a>
                            </p>
                            <p>
                                <a href='#!' className='footerSubtitleColor'>Tüm Otel Temaları <img className='rightarrowicon' src={rightArrow} alt='' /></a>
                            </p>
                        </div>
                        <div></div>

                        <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='oteller'>İletişim</h6>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>İletişim Bilgileri</a>
                            </p>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>İletişim Formu</a>
                            </p>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>Yetkili Acentalar</a>
                            </p>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>Öneri Şikayer Formu</a>
                            </p>
                            <p>
                                <a href='www.setur.com.tr' className='footerSubtitleColor'>Sıkça Sorulan Sorular</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='seturCompanies'>
                <img className='seturdutyfree' src={seturDutyFree} alt='' />
                <img className='seturdutyfree' src={seturday} alt='' />
                <img className='seturdutyfree' src={seturBiz} alt='' />
                <img className='seturdutyfree' src={seturMice} alt='' />
                <img className='seturdutyfree' src={sedventure} alt='' />
                <img className='seturdutyfree' src={seturSelect} alt='' />
                <img className='seturdutyfree' src={seturCruise} alt='' />
                <img className='seturdutyfree' src={seturAcademia} alt='' />
            </div>

            <hr className='seperator'></hr>

            <div className='footerEnd'>
                <p>Belirtilen fiyatlar T.C. ve K.K.T.C. vatandaşları için geçerlidir. Yabancı uyruklu misafirlere uygulanacak fiyatlarımız çağrı merkezimizden öğrenebilirsiniz.</p>
                <p>Mentioned prices are valid for Turkish and Cyprus citizens only. Please contact our call center for special fares for foreign nationals. </p>
                <p>Sitemizde yer alan tesis özellikleri bilgilendirme amaçlıdır, hizmet ve kullanım saatleri dönemsel olarak Otel’ler tarafından değişitirilebilir.</p>
                <p>All facility properties on this website are for information purposes only. Service conditions and operating hours might be changed by hotels seasonally.</p>
                <p>Kıbrıs rezervasyonlarında otel konaklaması ile birlikte alınan uçak biletleri paket olarak geçerlidir. Otel konaklaması iptal edildiğinde uçak bileti tek başına kullanılmaz. Uçak bileti anlaşmalı sınıflardan kesildiği için iptal iade yapılmaz.</p>
                <p>Airplane tickets purchased with the hotel stay are valid as a package, for the reservations made in Cyprus. When the reservation is canceled, the flight ticket may not be not used. Cancellation is non-refundable as the airplane ticket is deducted from the contracted classes.</p>

            </div>

            <div className='footerSubtitleColor' >
                <img className='koclogo' src={koclogo} alt=' '></img>
                {"© Copyright 2000-2022  "}

            </div>
            <div className='bottomrighticons'>
                <img className='tursablogo' src={tursablogo} alt=' '></img>
                <img className='visalogo' src={visalogo} alt=' '></img>
            </div>

        </MDBFooter>
    );
}
export default Footer;