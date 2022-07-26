import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import a1 from './UpBannerImages/a1.jpg';
import a2 from './UpBannerImages/a2.png';
import a3 from './UpBannerImages/a3.jpg';

import { render } from 'react-dom';
import React from 'react';
import Carousel from 'react-image-carousel';

let images = [
  './UpBannerImages/a1.jpg',
  './UpBannerImages/a2.png',
  './UpBannerImages/a3.jpg',
    
];

render(<div className="UpBanner">
            <Carousel images={images} 
                        thumb={true}
                        loop={true}
                        autoplay={3000}/>
        </div>, document.getElementById("app"))

export default UpBan;