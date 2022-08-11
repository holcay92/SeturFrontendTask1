import React from 'react'
import iconRight from './images/commercialImages/icon-chevron-right.svg';
import iconCalendar from './images/FilterIcons/icon-calendar.svg';
import iconPerson from './images/FilterIcons/icon-person.svg';
import iconEdit from './images/FilterIcons/icon-edit.svg';
import iconFilter from './images/FilterIcons/icon-filter.svg';

function FilterUpMobile() {
    return (
        <div className='filterUpMobile'>
            <div className='UpFilterRectangleMobile'>
                <p className="allTurkishhotelsMobile">Tüm Türkiye Otelleri
                    <img src={iconRight} className='iconleftMobile' alt='' />
                </p>
                <p className="AntalyaHotelsMobile">
                    Antalya Otelleri
                    <span className="text-style-1">(145)</span>
                </p>
                <p className='dateMobile'>
                    <img src={iconCalendar} className='iconCalendarMobile' alt='' />
                    21.11.2019 - 05.12.2019
                </p>
                <div className='d-flex'>
                    <p className='howManyPeopleHowManyRoomsMobile'>
                        <img src={iconPerson} className='iconPersonMobile' alt='' />
                        1 Oda, 2 Yetişkin
                    </p>
                    <p className='DegistirTextMobile'>
                        Değiştir
                        <img src={iconEdit} className='iconEditMobile' alt='' />
                    </p>
                </div>
                <div className='filterAndSortRectangleMobile'>
                    <p className='filterAndSortTextMobile'>
                        <img src={iconFilter} className='iconFilterMobile' alt='' />
                        Filtrele ve Sırala
                    </p>
                </div>

                <div className='iptalIadeRectangleMobile'>
                    <div className='iptalIadeMaskMobile'>
                        <p className="yetmisIkıSaateKadarIptalTextMobile">72 Saate Kadar Koşulsuz
                            İptal İade Güvencesi

                        </p>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default FilterUpMobile