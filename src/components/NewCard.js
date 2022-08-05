import React from 'react'
import a1 from './images/navbarImages/otelImg.png';
import checkMark from './images/otelCardIcons/checkmark.svg';

function NewCard() {
    return (
        <div>
            {/* example hotel card */}
            <div className="row p-2 bg-white border rounded mt-2">
                <div className="col-md-3 ml--1 mr-2">
                    <img className="ImageCard" src={a1} />
                </div>

                <div className="col-md-6" >
                    <div className='testCardMarginLeft'>
                        <h5> TestNewCard!!Concorde Luxury Resort Casino Convention & SPA</h5>
                        <div className="d-flex flex-row">
                            <div className="ratings">
                                <i className="fa fa-star">We are Setur!!</i>
                            </div>
                            <span> __Setur</span>
                        </div>
                        <div className="mt-1 mb-1 spec-1">
                            <span>Halil Olcay..</span>
                            <span className="dot"> Internship Program </span>
                            <span> For Students </span>
                            <span className="dot"></span>
                            <span> in Summer<br /></span>
                        </div>
                        <p className="text-justify text-truncate para mb-0">Bilgi Teknolojileri ve Ar-Ge Departmanı.<br></br></p>
                    </div>
                </div>
                <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div className="d-flex flex-row align-items-center">
                        <h4 className="mr-1">1867,98 TL</h4><span className="strike-text">132,72 EUR</span>
                    </div>
                    <h6 className="text-success">'den başlayan fiyatlarla</h6>
                    <div className="d-flex flex-column mt-4"><button className="btn btn-primary btn-sm" type="button">Oteli incele</button><button className="btn btn-outline-primary btn-sm mt-2" type="button">Sepete Ekle</button></div>
                </div>
            </div>
            {/* example hotel card */}
        </div>
    )
}

export default NewCard