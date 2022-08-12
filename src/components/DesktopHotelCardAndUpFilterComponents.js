import React from 'react'
import a1 from './images/navbarImages/otelImg.png';
import HotelCardDesktop from './HotelCardDesktop';
import FilterUp2 from './FilterUp2';
import { Container } from 'react-bootstrap';

function DesktopHotelCardAndUpFilterComponents() {
    return (
        <div className='DesktopHotelCardAndUpFilterComponents' >
            <Container className='container mt-5 mb-5'>
                <div className="d-flex justify-content-center row">
                    <div className="col-md-12 col-sm-12 row">
                        
                        {/*FILTER SECTION*/}
                        <div className='col-md-3 '>
                            <FilterUp2 className='UpFilter2' />
                        </div>

                        {/*HOTEL CARD*/}
                        <div className="col-md-9">
                            {<HotelCardDesktop />}
                            {<HotelCardDesktop />}
                            {<HotelCardDesktop />}
                            {<HotelCardDesktop />}
                        </div>
                        
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default DesktopHotelCardAndUpFilterComponents