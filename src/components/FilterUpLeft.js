import React from 'react'
import Form from 'react-bootstrap/Form';
import iconRight from './images/commercialImages/icon-chevron-right.svg';
import iconDown from './images/commercialImages/icon-chevron-down.svg';



function FilterUpLeft() {
  return (
    <div className='FilterRectangle'>
      <div >
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
        <p className='diğerBolgeleriGoster'>Diğer Bölgeleri Göster <img className='iconChevronDown' src={iconDown} alt='' /></p>
        
      </div>
      
    </div >
  )
}

export default FilterUpLeft