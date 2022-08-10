import React from 'react'
import Form from 'react-bootstrap/Form';
import iconRight from './images/commercialImages/icon-chevron-right.svg';
import { Container } from 'react-bootstrap';
import iconUp from './images/FilterIcons/icon-up.svg';
import iconHavuz from './images/FilterIcons/icon-pool.svg';
import iconSpa from './images/FilterIcons/icon-spa.svg';
import iconTv from './images/FilterIcons/icon-tv.svg';
import iconWifi from './images/FilterIcons/icon-wifi.svg';
import iconGolf from './images/FilterIcons/icon-golf.svg';
import iconBeach from './images/FilterIcons/icon-beach.svg';
import iconDown from './images/FilterIcons/icon-up.svg';



function FilterUp2() {
  return (
    <Container className='UpFilter2'>
      < div className="col-xl-12" >
        <div className="row-md-2">

          <div className='RectangleSadeceMusaitTesisler'>
            <Form.Check id={`box-1-`} label={``} />
            <p className='SadeceMusaitTesisleriGosterText'>Sadece Müsait Tesisleri Göster (12)</p>
          </div >

          <div className='UcretsizIptalRectangle'>
            <Form.Check id={`box-1-`} label={``} />
            <p className='UcretsizIptalText'> Ücretsiz iptal (12)</p>
          </div >

        </div>
        <div className="container mb-4">
          <div className="row-md-4">
            <div className='OtelAdıAramaRectangle'>
              <p className="OtelAdıText">Otel Adı</p>
              <div className='OtelAdıAramaField'>
              </div>
            </div>
            <div className='KonaklamaFiyatıRectangle'>
              <p className="KonaklamaFiyatıText">
                Konaklama Fiyatı
              </p><img className='IconUp' src={iconUp} alt='' />
              <div className='d-flex'>
                <div className='MinFiyatRectangle'><p className='MinMaxText'>Min Fiyat</p></div>
                <div className='MaxFiyatRectangle'><p className='MinMaxText'>Max Fiyat</p></div>
              </div>
            </div>
          </div>
        </div>

        <div className="row-md-6">
          <div className='OtelOzellikleriRectangle'>
            <p className="OtelOzellikleriText">
              Otel Özellikleri <img className='IconUp' src={iconUp} alt='' />
            </p>
            <div className='d-flex'>
              <div className='OzellikRectangle'>
                <p className='acikHavuzText'>
                  <img src={iconHavuz} className='acikHavuzIcon' alt='' />Açık Havuz</p>
              </div>
              <div className='OzellikRectangle'>
                <p className='spaText'>
                  <img src={iconSpa} className='spaIcon' alt='' />Spa</p>
              </div>
              <div className='OzellikRectangle'>
                <p className='beachText'>
                  <img src={iconBeach} className='beachIcon' alt='' />Plajlı</p>
              </div>
            </div>
            <div className='d-flex mb-3'>
              <div className='OzellikRectangle'>
                <p className='wifiText'>
                  <img src={iconWifi} className='wifiIcon' alt='' />Ücretsiz Wi-fi</p>
              </div>
              <div className='OzellikRectangle'>
                <p className='tvText'>
                  <img src={iconTv} className='tvIcon' alt='' />Toplantı Odası</p>
              </div>
              <div className='OzellikRectangle'>
                <p className='golfText'>
                  <img src={iconGolf} className='golfIcon' alt='' />Golf Sahası</p>
              </div>
            </div>
            <p className="DigerOtelOzellikleriText">
              Diğer Otel Özellikleri
              <img className='iconUpDigerOtelOzellikleriText' src={iconDown} alt='' />
            </p>



            <Form>

              <Form.Check id={`box-1-`} label={`Ücretsiz Otopark (23)`} />
              <Form.Check id={`box-2-`} label={`Ücretsiz İnternet (12) `} />
              <Form.Check id={`box-3-`} label={`Tenis Kortu (8)`} />
              <Form.Check id={`box-1-`} label={`Açık Havuz  (23)`} />
              <Form.Check id={`box-2-`} label={`Spa Merkezi (12) `} />
              <Form.Check id={`box-3-`} label={`Plajlı (8)`} />
              <Form.Check id={`box-1-`} label={`Ücretsiz Otopark (23)`} />
              <Form.Check id={`box-2-`} label={`Ücretsiz İnternet (12) `} />

              <Form.Check id={`box-4-`} label={`Manavgat (8) `} />  {/*${type}*/}
            </Form >

            <div className='CocukRectangle'>
              <p className="CocukText">
                Çocuk  <img className='iconDownCocukText' src={iconDown} alt='' />
              </p>
            </div>
            <div className='OtelKonaklamaTipiRectangle'>
              <p className="OtelKonaklamaTipi">
                Otel Konaklama Tipi  <img className='iconDownCocukText' src={iconDown} alt='' />
              </p>
            </div>
            <div className='OtelTipiRectangle'>
              <p className="OtelTipi">
                Otel Tipi  <img className='iconDownCocukText' src={iconDown} alt='' />
              </p>
            </div>
            <div className='OtelTemalarRectangle'>
              <p className="OtelTemalar">
                Otel Temaları  <img className='iconDownCocukText' src={iconDown} alt='' />
              </p>
            </div>

          </div >
        </div>
      </div>
    </Container>
  )
}

export default FilterUp2