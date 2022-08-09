import React from 'react'
import Form from 'react-bootstrap/Form';
import iconRight from './images/commercialImages/icon-chevron-right.svg';
import iconDown from './images/commercialImages/icon-chevron-down.svg';
import { Container } from 'react-bootstrap';
import iconUp from './images/FilterIcons/icon-up.svg';

function FilterUp2() {
  return (
    <Container className='UpFilter2'>
      < div className="col-md-12" >
        <div className="row-md-3">

          <div className='RectangleSadeceMusaitTesisler'>
            <Form.Check id={`box-1-`} label={``} />
            <p className='SadeceMusaitTesisleriGosterText'>Sadece Müsait Tesisleri Göster</p>
          </div >

          <div className='UcretsizIptalRectangle'>
            <Form.Check id={`box-1-`} label={``} />
            <p className='UcretsizIptalText'> Ücretsiz iptal</p>
          </div >

        </div>
        <div className="container mb-4">
          <div className="row-md-5">
            <div className='OtelAdıAramaRectangle'>
              <p className="OtelAdıText">Otel Adı</p>
              <div className='OtelAdıAramaField'>
              </div>
            </div>
            <div className='KonaklamaFiyatıRectangle'>
              <p className="KonaklamaFiyatıText">
                Konaklama Fiyatı<img className='IconUp' src={iconUp} alt='' />
              </p>
              <div className='d-flex'>
                <textarea className='MinFiyatRectangle' rows="1" cols="50" placeholder="Min Fiyat"></textarea>
                <textarea className='MaxFiyatRectangle' rows="1" cols="50" placeholder="Max Fiyat"></textarea>
              </div>
            </div>
          </div>
        </div>

        <div className="row-md-5">
          <div className='OtelOzellikleriRectangle'>
            <p className="OtelOzellikleriText">
              Otel Özellikleri <img className='IconDown' src={iconUp} alt='' />
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
            
          </div >
        </div>
      </div>
    </Container>
  )
}

export default FilterUp2