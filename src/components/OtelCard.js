import React from 'react'
import otelimage from './images/otelImg.png';

function OtelCard() {
  return (
    <div className="OtelCard" >
    <h5 className="OtelAd">Concorde Luxury Resort Casino Convention & SPA</h5>
  <img className="otelImg" src={otelimage} alt="info"/>
  
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Concorde Luxury Resort Casino Convention & SPA</p>
    <a href="www.setur.com.tr" className="OteliSecButton">Oteli Seç</a>
  </div>
</div>
  )
}

export default OtelCard