import React from 'react'
import a1 from './images/navbarImages/otelImg.png';

import TestCard from './TestCard';
import UpFilter2 from './UpFilter2';


function TestResponsiveOtelCard() {
    return (

        <div className="container mt-5 mb-5">
            <div className="d-flex justify-content-center row">
                <div className="col-md-12 col-sm-12 row">
                    {/*FILTER SECTION*/}
                    <UpFilter2 />

                    {/*OTEL CARD*/}
                    <div className="col-md-9">

                        {/* example hotel card */}
                        <div className="row p-2 bg-white border rounded mt-2">
                            <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image" src={a1} /></div>
                            <div className="col-md-6 mt-1">
                                <h5>Concorde Luxury Resort Casino Convention & SPA</h5>
                                <div className="d-flex flex-row">
                                    <div className="ratings mr-2">
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
                            <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                    <h4 className="mr-1">1867,98 TL</h4><span className="strike-text">132,72 EUR</span>
                                </div>
                                <h6 className="text-success">'den başlayan fiyatlarla</h6>
                                <div className="d-flex flex-column mt-4"><button className="btn btn-primary btn-sm" type="button">Oteli incele</button><button className="btn btn-outline-primary btn-sm mt-2" type="button">Sepete Ekle</button></div>
                            </div>
                        </div>
                        {/* example hotel card */}


                        <TestCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestResponsiveOtelCard