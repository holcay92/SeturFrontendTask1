import React from 'react'
import Form from 'react-bootstrap/Form';
import iconRight from './images/commercialImages/icon-chevron-right.svg';

function UpLeftFilter() {
  return (
    <div className='FilterRectangle'>
      <div>
        <i className='tumTurkiyeOtelleri'>Tüm Türkiye Otelleri <img  className='iconChevronRight ' src={iconRight} alt=''/></i>
        <p className='AntalyaOtelleri'>Antalya Otelleri (145)</p>
      </div>
      <Form>
        {['checkbox', 'radio'].map((type) => (
          <div key={`default-${type}`} className="mb-3">
            <Form.Check
              type={type}
              id={`default-${type}`}
              label={`default ${type}`}
            />

            <Form.Check
              disabled
              type={type}
              label={`disabled ${type}`}
              id={`disabled-default-${type}`}
            />
          </div>
        ))}
      </Form>
    </div>
  )
}

export default UpLeftFilter