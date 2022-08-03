import React from 'react'
import iconInfo from './images/otelCardIcons/icon-info.svg'

function IptalGuvenceBanner() {
    return (
        <div className='BackgroundMain'>
             <div className='iptalGuvenceBanner'>
                  <p className='mainText'> 72 Saate Kadar Koşulsuz İptal ve İade Güvencesi <img className='infoIcon ' src={iconInfo} alt='' /></p>
                </div>      
        </div>
    )
}

export default IptalGuvenceBanner