import React from 'react'
import Form from 'react-bootstrap/Form';
import iconRight from './images/commercialImages/icon-chevron-right.svg';
import iconDown from './images/commercialImages/icon-chevron-down.svg';

function UpFilter2() {
  return (
    <div className='UpFilter2'>
      < div className="col-md-12" >
        <div className="row-md-3">
          <div className='RectangleSadeceMusaitTesisler'>
            <Form.Check labelclassname='RectangleSadeceMusaitTesisler'
              id={`box-1-`}
              label={`Sadece Müsait Tesisleri Göster`}
            />
          </div >

        </div>
        <div className="container mb-5">
          <div className="row-md-5">
            <div className='FilterRectangle'>
              <div>
                <i className='tumTurkiyeOtelleri'>Tüm Türkiye Otelleri</i>
                <img className='iconChevronRight ' src={iconRight} alt='' />
                <p className='AntalyaOtelleri'>Antalya Otelleri (145)</p>
              </div>
              <Form>
                <Form.Check
                  id={`box-1-`}
                  label={`Kemer (23)`}
                />
                <Form.Check
                  id={`box-2-`}
                  label={`Finike (12) `}
                />
                <Form.Check
                  id={`box-3-}`}
                  label={`Alanya (8)`}
                />
                <Form.Check
                  id={`box-4-`}
                  label={`Manavgat (8) `}  /*${type}*/
                />


              </Form >
              <div >
                <i className='diğerBolgeleriGoster'>Diğer Bölgeleri Göster</i>
                <img className='iconChevronDown ' src={iconDown} alt='' />
              </div>
            </div >
          </div>
        </div>
        <div className="container mb-5">
          <div className="row-md-4">
            <div className='FilterRectangle'>
              <div>
                <i className='tumTurkiyeOtelleri'>Tüm Türkiye Otelleri</i>
                <img className='iconChevronRight ' src={iconRight} alt='' />
                <p className='AntalyaOtelleri'>Antalya Otelleri (145)</p>
              </div>
              <Form>
                <Form.Check
                  id={`box-1-`}
                  label={`Kemer (23)`}
                />
                <Form.Check
                  id={`box-2-`}
                  label={`Finike (12) `}
                />
                <Form.Check
                  id={`box-3-}`}
                  label={`Alanya (8)`}
                />
                <Form.Check
                  id={`box-4-`}
                  label={`Manavgat (8) `}  /*${type}*/
                />


              </Form >
              <div >
                <i className='diğerBolgeleriGoster'>Diğer Bölgeleri Göster</i>
                <img className='iconChevronDown ' src={iconDown} alt='' />
              </div>
            </div >                </div>
        </div>
      </div >
    </div>
  )
}

export default UpFilter2